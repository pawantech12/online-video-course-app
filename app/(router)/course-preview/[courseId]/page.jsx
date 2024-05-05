"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";

import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";
import { useUser } from "@clerk/nextjs";
import GlobalApi from "../../../_utils/GlobalApi";

const CoursePreview = ({ params }) => {
  const [courseInfo, setCourseInfo] = useState();
  const { user } = useUser();
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();
  useEffect(() => {
    console.log("Params:", params.courseId);
    params && getCourseInfoById();
  }, [params]);
  useEffect(() => {
    courseInfo && user && checkUserEnrolledToCourse();
  }, [courseInfo, user]);
  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params.courseId).then((res) => {
      console.log("course with slug:", res);
      setCourseInfo(res.courseList);
    });
  };

  const checkUserEnrolledToCourse = () => {
    GlobalApi.checkUserEnrolledToCourse(
      courseInfo.slug,
      user.primaryEmailAddress.emailAddress
    ).then((res) => {
      console.log("user enrol course:", res.userEnrollCourses[0]?.id);
      const isEnrolled = res?.userEnrollCourses[0]?.id ? true : false;
      console.log("Is user enrolled:", isEnrolled); // Ensure to set false if user is not enrolled
      setIsUserAlreadyEnrolled(res.userEnrollCourses[0]?.id);
    });
  };
  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo} />
        </div>
        <div>
          <CourseEnrollSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
          <CourseContentSection courseInfo={courseInfo} />
        </div>
      </div>
    )
  );
};

export default CoursePreview;
