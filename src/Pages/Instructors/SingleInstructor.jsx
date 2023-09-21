import React from "react";

// eslint-disable-next-line react/prop-types
const SingleInstructor = ({ instructor }) => {
  // console.log(instructor);
  // eslint-disable-next-line react/prop-types
  const { image, name } = instructor;

  return (
    <div className=" text-white  py-5 bg-secondary shadow-lg  lg:shadow-2xl md:shadow-2xl hover:mb-3 hover:pt-3 ">
      <div className="items-center text-center">
        <figure className="px-14 ">
          <img src={image} alt="" className=" rounded-xl" />
        </figure>
        <h2 className="text-xl my-2 font-bold"> {name}</h2>
        <h5>Masters Degree</h5>
      </div>
      <div className="flex justify-between px-8 py-5">
        <p>1 course</p>
        <p>5 students</p>
      </div>
      <p className="text-center">Rating</p>
    </div>
  );
};

export default SingleInstructor;
