import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";

const CourseVideoDescription = ({ courseInfo }) => {
  console.log(courseInfo?.chapter);
  if (courseInfo?.chapter && courseInfo.chapter.length > 0) {
    // Log the first chapter object
    console.log(courseInfo.chapter[0]);

    // Check if courseInfo.chapter[0] is an object
    if (typeof courseInfo.chapter[0] === "object") {
      // Log the video object
      // console.log("url:", courseInfo.chapter[0].video.url);
      return (
        <div>
          <h2 className="text-[20px] font-semibold">{courseInfo.name}</h2>
          <h2 className="text-gray-500 text-[14px] mb-3">
            {courseInfo.author}
          </h2>
          <VideoPlayer
            videoUrl={courseInfo.chapter[0].video.url}
            poster={courseInfo.banner.url}
          />
          <h2 className="mt-5 text-[17px] font-semibold">About This Course</h2>
          <div>
            <Markdown className="text-[13px] font-light mt-2 leading-7">
              {courseInfo.description}
            </Markdown>
          </div>
        </div>
      );
    } else {
      console.log("courseInfo.chapter[0] is not an object");
    }
  } else {
    console.log("courseInfo.chapter is undefined or empty");
  }

  // Return null if chapter or chapter[0] is not defined or empty
  return null;
};

export default CourseVideoDescription;
