import React from "react";
import SingleInstructor from "./SingleInstructor";
import { Helmet } from "react-helmet-async";
import useInstructors from "../../hooks/UseInstructors";
import { LoadingBar } from "react-redux-loading-bar";

const Instructors = () => {
  const [instructors, loading] = useInstructors();
  // console.log(instructors);
  if (loading) {
    return <LoadingBar></LoadingBar>;
  }
  return (
    <div className="max-w-6xl  mx-auto pt-24">
      <Helmet>
        <title>LearnUp | Instructors</title>
      </Helmet>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {instructors.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
