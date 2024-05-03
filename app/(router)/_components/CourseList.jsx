import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

const CourseList = () => {
  const [CourseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((res) => {
      setCourseList(res?.courseLists);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {CourseList?.length > 0
          ? CourseList.map((items, index) => {
              return (
                <Link href={"/course-preview/" + items.slug}>
                  <div key={index}>
                    <CourseItem course={items} />
                  </div>
                </Link>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
                ></div>
              );
            })}
      </div>
    </div>
  );
};

export default CourseList;
