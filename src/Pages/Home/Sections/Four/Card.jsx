import React from "react";

import { FaQuoteRight } from "react-icons/fa";
const Card = ({ img, name, profation }) => {
  return (
    <div className="bg-secondary">
      <h3 className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat
        consequatur incidunt quos voluptatem atque sunt tempora distinctio
        itaque inventore.
      </h3>
      <div className="flex">
        <div className="flex gap-5">
          <div>
            <img src={img} alt="" />
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
