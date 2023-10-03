import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { instructorsFetch } from "../../../../../hooks/useClasses";

const VITE_IMAGE_KEY = import.meta.env.VITE_IMAGE_KEY;

const UpdateClass = () => {
  const { id } = useParams();
  const [instructor] = instructorsFetch();
  const navigate = useNavigate();

  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset, setValue } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_IMAGE_KEY}`;
  const [classDetails, setClassDetails] = useState("");
  const [initialImage, setInitialImage] = useState(""); // Added initialImage state

  const editorConfig = {
    readonly: false,
    placeholder: "About Course",
  };

  const [course, setCourse] = useState(null);
  const [classNotFound, setClassNotFound] = useState(false);

  useEffect(() => {
    if (instructor) {
      const courseData = instructor.find((classItem) => classItem._id === id);
      if (courseData) {
        setCourse(courseData);
        setValue("courseTitle", courseData.courseTitle);
        setValue("insName", courseData.insName);
        setValue("email", courseData.email);
        setValue("seats", courseData.seats);
        setValue("oldPrice", courseData.oldPrice);
        setValue("newPrice", courseData.newPrice);
        setClassDetails(courseData.classDetails);
        setValue("image", courseData.img);
        setInitialImage(courseData.img); // Set initialImage state with the course image URL
        console.log("classDetails in courseData: ", courseData.classDetails);
        console.log("image in courseData: ", courseData.img);
      } else {
        setClassNotFound(true);
      }
    } else {
      // Handle when instructor data is not available
      // For example, show a loading indicator or an error message
    }
  }, [instructor, id, setValue]);

  const onSubmit = (data) => {
    if (classNotFound) {
      Swal.fire({
        icon: "error",
        title: "Class not found",
      });
      navigate("/dashboard/myclass");
      return;
    }

    // Construct a FormData object to send file data
    const formData = new FormData();
    formData.append("image", data.image[0]);

    // Upload the image and course file
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          const updatedCourse = {
            img: imgURL,
            courseTitle: data.courseTitle,
            insName: data.insName,
            email: data.email,
            seats: data.seats,
            oldPrice: parseFloat(data.oldPrice),
            newPrice: parseFloat(data.newPrice),
            classDetails,
            lastUpdated: "2023-09-04",
            duration: "5 hours 20 minutes",
            status: "pending",
          };

          axiosSecure
            .patch(`/updateCourse/${id}`, updatedCourse)
            .then((response) => {
              if (response.data.message === "Course updated successfully") {
                Swal.fire({
                  icon: "success",
                  title: "Course updated successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                navigate("/dashboard/myclass");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Update failed",
                });
              }
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Update failed",
              });
            });
        }
      });
  };

  return (
    <>
      <div className="text-center mx-auto my-12">
        <Link to="/dashboard/myclass">
          <button className="bg-green-600 text-white text-lg font-medium py-2 px-4 rounded-lg hover-bg-green-800 transition duration-200">
            Back
          </button>
        </Link>
      </div>
      <div>
        {classNotFound ? (
          <p>Class not found.</p>
        ) : (
          <div>
            <h2>Class ID: {id}</h2>
            <div className="max-w-6xl mx-auto text-center">
              <div className="px-10 items-center justify-center mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Course Title
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Course Title"
                      {...register("courseTitle")}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Instructor Name*
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Instructor Name"
                      {...register("insName")}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Instructor Email*
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Available Seats*
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Available Seats"
                      {...register("seats")}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="flex my-4">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Category*</span>
                      </label>
                      <select
                        {...register("category")}
                        className="select select-bordered"
                      >
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Arts & Crafts">Arts & Crafts</option>
                        <option value="Business">Business</option>
                        <option value="Leadership">Leadership</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Management">Management</option>
                      </select>
                    </div>
                    <div className="form-control w-full ml-4">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Old Price*
                        </span>
                      </label>
                      <input
                        type="number"
                        {...register("oldPrice")}
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="form-control w-full ml-4">
                      <label className="label">
                        <span className="label-text font-semibold">
                          New Price*
                        </span>
                      </label>
                      <input
                        type="number"
                        {...register("newPrice")}
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">About Course</span>
                    </label>
                    <JoditEditor
                      value={classDetails}
                      config={editorConfig}
                      onChange={(newContent) => setClassDetails(newContent)}
                    />
                  </div>

                  <div className="form-control w-full my-4">
                    <label className="label">
                      <span className="label-text">Image*</span>
                    </label>
                    <input
                      type="file"
                      {...register("image")}
                      className="file-input file-input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full my-4">
                    <label className="label">
                      <span className="label-text">Current Image</span>
                    </label>
                    {initialImage && (
                      <img
                        src={initialImage}
                        alt="Current Course Image"
                        style={{ maxWidth: "100%" }}
                      />
                    )}
                  </div>

                  <input
                    className="btn btn-sm mt-4"
                    type="submit"
                    value="Update Course"
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateClass;
