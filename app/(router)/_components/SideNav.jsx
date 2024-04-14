import React from "react";
import { BookOpen, GraduationCap, BadgeIcon } from "lucide-react";
import Image from "next/image";
const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/Elearning.png" width={50} height={50} />
      <hr className="mt-7" />
      <div className="mt-5">
        {menu.map((item, index) => {
          return (
            <div className="group flex gap-3 mt-2 p-3 text-[20px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200">
              <item.icon className="group-hover:animate-bounce" />
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
