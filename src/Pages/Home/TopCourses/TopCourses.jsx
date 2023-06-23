import { useEffect, useState } from "react";
import TopTitle from "../../../Components/TopTitle/TopTitle";
import CourseCart from "./CourseCart";

const TopCourses = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="px-4 md:px-32 pt-16">
      <TopTitle
        title={"Explore top courses"}
        subTitle={
          "Explore all of our courses and pick your suitable ones to enroll and start learning with us!"
        }
        btn={"View All Course"}
      />
      <div className="grid grid-cols-1 md:grid-cols-4">
        {courses?.map((course) => (
          <CourseCart
            key={course.id}
            img={course?.img}
            title={course.title}
            name={course.name}
            rating={course.rating}
            oldPrice={course.oldPrice}
            newPrice={course.newPrice}
          ></CourseCart>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
