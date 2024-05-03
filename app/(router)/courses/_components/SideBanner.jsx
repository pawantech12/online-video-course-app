import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SideBanner = () => {
  const [sideBannerList, setSideBannerList] = useState([]);
  useEffect(() => {
    getSideBanners();
  }, []);
  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((res) => {
      console.log(res);
      setSideBannerList(res.sideBanners);
    });
  };
  return (
    <div>
      {sideBannerList.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.banner.url}
              alt="banner"
              width={500}
              height={300}
              onClick={() => window.open(item.url)}
              className="rounded-xl cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SideBanner;
