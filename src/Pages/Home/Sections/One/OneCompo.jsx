import React from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

// eslint-disable-next-line react/prop-types
const OneCompo = ({ id, image, number, text }) => {
  return (
    <div id={id} className="flex flex-col md:flex-row lg:flex-row md:gap-4 items-center justify-center">
      <div className="w-20 h-20 mb-2">
        <img src={image} alt="" />
      </div>
      <div>
        <Odometer className="text-2xl md:text-3xl lg:text-4xl font-bold" value={number} />
        <p className="text-base md:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
};

export default OneCompo;
