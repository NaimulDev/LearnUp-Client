import React from "react";
import { Link, useParams } from "react-router-dom";
import { instructorsFetch } from "../../../../../hooks/useClasses";

const UpdateClass = () => {
  const { id } = useParams();
  const [instructor] = instructorsFetch();

  const classData = instructor.find((item) => item._id === id);

  console.log(classData);

  console.log(id);
  return (
    <>
      <div className="text-center mx-auto my-12">
        <Link to={"/dashboard/myclass/"}>
          <button className="bg-green-600 text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-green-800 transition duration-200">
            Back
          </button>
        </Link>
      </div>
      <div>
        {classData ? (
          <div>
            <h2>Class ID: {id}</h2>
            {/* Display other class details from classData */}
            <p>Class Name: {classData.category}</p>
            <p>Status: {classData.status}</p>
            <p>Total Seats: {classData.seats}</p>
            {/* Add more fields as needed */}
          </div>
        ) : (
          <p>Class not found.</p>
        )}
      </div>
    </>
  );
};

export default UpdateClass;
