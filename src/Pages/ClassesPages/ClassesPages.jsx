import React, { useState, useEffect } from "react";
import ClassCart from "./ClassCart";

const token = localStorage.getItem("access-token");

const ClassesPages = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/class`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const approvedClasses = data.filter(
          (classItem) => classItem.status === "approved"
        );
        setClasses(approvedClasses);
      });
  }, []);
  console.log(classes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mx-4 md:mx-36 lg:mx-24">
      {classes.map((classItem, idx) => (
        <ClassCart key={idx} classItem={classItem} />
      ))}
    </div>
  );
};

export default ClassesPages;
