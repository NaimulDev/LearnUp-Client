import React from "react";

import { FaQuoteRight } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Card = ({ img, name, profation }) => {
  return (
    <div className="bg-secondary px-8 py-8">
      <h3 className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat
        consequatur incidunt quos voluptatem atque sunt tempora distinctio
        itaque inventore.
      </h3>
      <div className="flex">
        <div className="flex gap-5 mt-3">
          <div className=" rounded-full  h-14 w-14">
            <img src={img} alt="" className="rounded-full  " />
          </div>
          <div className="text-white">
            <h2>{name}</h2>
            <p>{profation}</p>
          </div>
        </div>
        <div className="w-12 h-14">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
