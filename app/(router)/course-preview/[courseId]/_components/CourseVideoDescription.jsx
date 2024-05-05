import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
import { Button } from "../../../../../components/ui/button";

const CourseVideoDescription = ({
  courseInfo,
  activeChapterIndex,
  watchMode = false,
  setChapterCompleted,
}) => {
  console.log(courseInfo?.chapter);
  if (courseInfo?.chapter && courseInfo.chapter.length > 0) {
    // Log the first chapter object
    console.log(courseInfo.chapter[activeChapterIndex]);

    // Check if courseInfo.chapter[0] is an object
    if (typeof courseInfo.chapter[activeChapterIndex] === "object") {
      // Log the video object
      // console.log("url:", courseInfo.chapter[0].video.url);
      return (
        <div>
          <h2 className="text-[20px] font-semibold">{courseInfo.name}</h2>
          <h2 className="text-gray-500 text-[14px] mb-3">
            {courseInfo.author}
          </h2>
          <VideoPlayer
            videoUrl={courseInfo.chapter[activeChapterIndex].video.url}
            poster={!watchMode ? courseInfo.banner.url : null}
          />
          <h2 className="mt-5 text-[17px] font-semibold">
            {watchMode ? (
              <span className="flex justify-between items-center">
                {courseInfo.chapter[activeChapterIndex].name}
                <Button
                  onClick={() =>
                    setChapterCompleted(
                      courseInfo.chapter[activeChapterIndex].id
                    )
                  }
                >
                  Mark Completed
                </Button>
              </span>
            ) : (
              <span>About This Course</span>
            )}
          </h2>
          <div>
            {watchMode ? (
              <Markdown className="text-[13px] font-light mt-2 leading-7">
                {courseInfo.chapter[activeChapterIndex].shortDesc}
              </Markdown>
            ) : (
              <Markdown className="text-[13px] font-light mt-2 leading-7">
                {courseInfo.description}
              </Markdown>
            )}
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
