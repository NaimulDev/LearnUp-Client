// import React, { useState, useEffect } from "react";
import useCourses from "../../hooks/useCourses";
import ClassCart from "./ClassCart";
import { LoadingBar } from "react-redux-loading-bar";

// const token = localStorage.getItem("access-token");

const ClassesPages = () => {
  // const [classes, setClasses] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
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
  //       setIsLoading(false);
  //     });
  // }, []);

  const { loading, classes } = useCourses();
 
  if (loading) {
    return <LoadingBar></LoadingBar>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mx-4 md:mx-36 lg:mx-24">
      {classes.map((classItem, index) => (
        <ClassCart key={index} classItem={classItem} index={index} />
      ))}
    </div>
  );
};

export default ClassesPages;
