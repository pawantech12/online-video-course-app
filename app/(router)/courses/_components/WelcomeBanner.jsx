import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center rounded-xl bg-white p-5">
      <Image
        src="/panda.png"
        alt="Panda with Laptop"
        width={100}
        height={100}
      />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-primary">CodeWithPawan</span> Academy
        </h2>
        <p className="text-gray-500">
          Explore,Learn and Build All real life projects
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
