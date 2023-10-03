import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import bgImg from "../../../src/assets/Banner/course_bg.jpg";
const CoursesDetails = () => {
  const { courseTitle } = useParams();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery(["class"], async () => {
    try {
      const res = await axiosSecure.get("/class");
      return res.data;
    } catch (error) {
      console.error("Error fetching class:", error);
      throw error;
    }
  });

  // Filter the classes that match the courseTitle
  const filteredCourse = courses.filter(
    (classItem) => classItem.courseTitle === courseTitle
  );

  if (isLoading) {
    return (
      <div className="text-center items-center py-14">
        <h1 className="text-white">Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center items-center py-14">
        <h1 className="text-white">Error fetching course details</h1>
      </div>
    );
  }

  if (filteredCourse.length === 0) {
    return (
      <div className="text-center items-center py-14">
        <h1 className="text-white">Course Not available</h1>
      </div>
    );
  }

  const course = filteredCourse[0];
  console.log(course);
  return (
    <div className="text-green-700 bg-secondary">
      <img src={bgImg} alt="" />

      <div className="flex px-24 mx-auto justify-between">
        <div>
          <p>Rating: {course.rating}</p>
          <h2>{course.courseTitle} </h2>
          <h6>{course.category}</h6>
          <h1 className="text-2xl font-semibold">About Course</h1>
          <p dangerouslySetInnerHTML={{ __html: course.classDetails }}></p>
        </div>
        <div className="w-1/3 -mt-24 p-3 bg-white text-black">
          <img src={course.img} alt={course.courseTitle} />
          <h3>${course.newPrice}</h3>
          <p>duration {course.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
