"use client";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "../_components/CourseList";
import SideBanner from "./_components/SideBanner";

function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        <WelcomeBanner />
        <CourseList />
      </div>
      <div className="p-5 bg-white rounded-xl">
        <SideBanner />
      </div>
    </div>
  );
}

export default Courses;
