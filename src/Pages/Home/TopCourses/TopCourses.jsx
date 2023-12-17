// import { useEffect, useState } from "react";
import TopTitle from "../../../Components/TopTitle/TopTitle";
import useCourses from "../../../hooks/useCourses";
// import CourseCart from "./CourseCart";
import ClassCart from "../../ClassesPages/ClassCart";

// const token = localStorage.getItem("access-token");

const TopCourses = () => {
  // const [courses, setCourses] = useState();
  // useEffect(() => {
  //   fetch("course.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);
  // const [classes, setClasses] = useState([]);
  const { classes, loading } = useCourses();

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/class`, {
  //     headers: {
  //       authorization: `bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const approvedClasses = data.filter(
  //         (classItem) => classItem.status === "approved"
  //       );
  //       setClasses(approvedClasses);
  //     });
  // }, []);
  // console.log(classes);

  return (
    <>
      <div className="px-4 md:px-32 pt-16">
        <TopTitle
          title={"Explore top courses"}
          subTitle={
            "Explore all of our courses and pick your suitable ones to enroll and start learning with us!"
          }
          btn={"View All Course"}
        />
        {/* <div className="grid grid-cols-1 md:grid-cols-4">
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
      </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mx-4 md:mx-36 lg:mx-24">
        {classes?.slice(0, 8).map((classItem, idx) => (
          <ClassCart key={idx} classItem={classItem} />
        ))}
      </div>
    </>
  );
};

export default TopCourses;
