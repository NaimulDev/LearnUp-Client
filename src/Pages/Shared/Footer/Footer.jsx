// import React from "react";
// import { BiStop,BiLocationPlus,BiPhoneCall } from "react-icons/Bi";
// import { RiCellphoneFill } from "react-icons/Ri";
// import {
//   FaYoutube,
//   FaInstagramSquare,
// } from "react-icons/Fa";
// import { AiFillLinkedin, AiFillFacebook,AiOutlineMail } from "react-icons/Ai";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#0e113d] text-white">
      <div>
        <h1 className="text-3xl font-bold font-mono">Ellen</h1>
        <p className="font-serif">
          Lorem ipsum dolor sit amet, consectetur, sed <br /> do eiusmod tempor
          incididunt ut labore et dolore magna <br /> aliqua minim.
        </p>
        <div className="flex gap-3 text-3xl">
          <a
            
            className=" hover:text-blue-400 text-4xl  text-slate-300"
            href="https://www.facebook.com/profile.php?id=100034116217598&mibextid=ZbWKwL"
          >
            {/* <AiFillFacebook /> */}
          </a>
          <a
         
            href="https://www.linkedin.com/in/mohammasd-sarowar/"
            className=" hover:text-blue-400 text-4xl  text-slate-300 "
          >
            {/* <AiFillLinkedin /> */}
          </a>{" "}
          <a className=" hover:text-blue-400 text-4xl  text-slate-300" href="#">
            {" "}
            {/* <FaYoutube /> */}
          </a>
          <a href="#" className=" hover:text-blue-400 text-4xl  text-slate-300">
            {/* <FaInstagramSquare /> */}
          </a>{" "}
        </div>
      </div>
      <div>
        <span className="text-2xl font-sans font-bold ">About Us
           <hr className="border-b-2 border-indigo-500 mt-2 "/>
        </span>


   
        {/* <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/> About Us</a>
        <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/>Instructor Registration</a>
        <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/> Instructors</a>
        <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/>Success Stories</a> */}
      </div>
      <div>
        <span className="text-2xl font-sans font-bold ">Resources
           <hr className="border-b-2 border-indigo-500 mt-2 "/>
        </span>


   
        {/* <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/> eLearning School</a>
        <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/>Courses</a>
        <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/>Terms & Conditions</a>
        <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/>Purchase Guide</a>
        <a className="link link-hover flex items-center font-serif"><BiStop className="text-blue-500 mr-1 text-lg"/>Privacy Policy</a> */}
      </div>
      <div>
        <span className="text-2xl font-sans font-bold ">Address
           <hr className="border-b-2 border-indigo-500 mt-2 "/>
        </span>


   
        {/* <a className="link link-hover flex items-center font-serif hover:text-blue-500"><BiLocationPlus className=" mr-1 text-lg"/> 122 road Dhaka Bangladesh</a>
        <a className="link link-hover flex items-center font-serif hover:text-blue-500"><BiPhoneCall className=" mr-1 text-lg"/>+9660541502061</a>
        <a className="link link-hover flex items-center font-serif hover:text-blue-500"><AiOutlineMail className=" mr-1 text-lg"/> abc@gmail.com</a>
        <a className="link link-hover flex items-center font-serif hover:text-blue-500"><RiCellphoneFill className="  mr-1 text-lg"/>12345667</a> */}
      </div>
   


    </footer>
  );
};


export default Footer;
