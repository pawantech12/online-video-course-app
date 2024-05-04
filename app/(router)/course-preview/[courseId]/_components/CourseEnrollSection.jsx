import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CourseEnrollSection = ({ courseInfo, isUserAlreadyEnrolled }) => {
  const membership = true;
  console.log("courseinfo", courseInfo);
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  }, []);

  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user.primaryEmailAddress.emailAddress
    ).then((res) => {
      console.log("Enroll course", res);
      if (res) {
        toast("User Enrolled Succesfully", {
          description: "User Enrolled to this Course",
        });
        router.replace("/watch-course/" + res.createUserEnrollCourse.id);
      }
    });
  };
  return (
    <div className="p-3 text-center rounded-sm bg-primary ">
      <h2 className="text-[22px] font-bold text-white">Enroll to the Course</h2>
      {user && (membership || courseInfo.free) && !isUserAlreadyEnrolled ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to start Learning and building the project
          </h2>
          <Button
            className="bg-white text-primary hover:bg-white hover:text-primary"
            onClick={() => onEnrollCourse()}
          >
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to start Learning and building the project
          </h2>
          <Link href={"/sign-in"}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        !isUserAlreadyEnrolled && (
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white font-light">
              Buy Monthly Membership and Get access to all courses
            </h2>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Buy Membership Just $2.99
            </Button>
          </div>
        )
      )}
      {isUserAlreadyEnrolled && (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Continue to Learn Your Course
          </h2>
          <Link href={"/watch-course" + isUserAlreadyEnrolled}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Continue
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;
