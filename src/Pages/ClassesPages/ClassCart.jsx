/* eslint-disable react/prop-types */

import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const token = localStorage.getItem("access-token");

const ClassCart = ({ classItem }) => {
  const [isSelectButtonDisabled, setIsSelectButtonDisabled] = useState(false);
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;

  const [users, setUsers] = useState([]);

  const { data: fetchedUsers = [] } = useQuery(
    ["users"],
    async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    },
    {
      enabled: !loading,
    }
  );

  useEffect(() => {
    if (fetchedUsers.length > 0) {
      setUsers(fetchedUsers);
    }
  }, [fetchedUsers]);
  const currentUser = users.find((item) => item?.email === email);

  const instructor = currentUser?.role === "instructor";
  const admin = currentUser?.role === "admin";

  const {
    _id,
    name,
    insName,
    seats,
    price,
    oldPrice,
    newPrice,
    img,
    courseTitle,
    status,
    rating,
    lastUpdated,
    classDetails,
    enrolledStudents,
    adminFeedback,
  } = classItem;

  const newData = {
    className: name,
    instructorName: insName,
    instructorEmail: email,
    seats: seats,
    price: price,
    classDetails: classDetails,
    imageURL: img,
    status: status,
    adminFeedback: adminFeedback,
    enrolledStudents: enrolledStudents,
    email: user?.email,
  };

  const handleSelectButton = (id) => {
    if (user) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to be added to the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add me!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Added!", "You have been added to the class.", "success");
          fetch(`${import.meta.env.VITE_API_URL}/mySelectedClasses`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newData),
          })
            .then((res) => res.json())
            .then((data) => {
              setIsSelectButtonDisabled(true);
            });
        }
      });
    } else {
      Swal.fire({
        icon: "question",
        title: "Oops...",
        text: "Please Login Now!",
        footer: '<a href="/login">Do you have an account?</a>',
      });
    }
  };

  const cardClasses = admin || instructor || seats === 0 ? "bg-red-500" : "";

  // State to control the visibility of the hidden div
  const [isHiddenDivVisible, setIsHiddenDivVisible] = useState(false);

  return (
    <div
      className={`w-72 mx-auto mb-8 relative ${cardClasses}`}
      onMouseEnter={() => setIsHiddenDivVisible(true)}
      onMouseLeave={() => setIsHiddenDivVisible(false)}
    >
      <Link to={`/course/${courseTitle}`}>
        <div className="text-white p-3">
          <div>
            <img
              src={img}
              alt=""
              className="mb-2 w-full transition-transform transform hover:scale-105"
            />
          </div>
          <h1 className="text-2xl font-bold">{courseTitle}</h1>
          <h6>{insName}</h6>
          <p>{rating}</p>
          <h2 className="text-2xl">
            ${oldPrice} <span> ${newPrice}</span>
          </h2>
        </div>
      </Link>
      {/* Hidden div that appears above the other cart layout on hover */}
      {isHiddenDivVisible && (
        <div className="absolute -right-72 top-0 p-3 w-72 bg-white border border-gray-300 z-10 opacity-100">
          <h1 className="text-2xl font-bold">{courseTitle}</h1>
          <h6>{lastUpdated}</h6>
          <button
            onClick={handleSelectButton}
            disabled={
              seats === 0 || instructor || admin || isSelectButtonDisabled
            }
            className="bg-slate-500 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassCart;
