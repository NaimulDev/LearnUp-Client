import React, { useState } from "react";
import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const VITE_IMAGE_KEY = import.meta.env.VITE_IMAGE_KEY;
const AddClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_IMAGE_KEY}`;
  const [classDetails, setClassDetails] = useState("");
  console.log(classDetails);
  const editorConfig = {
    readonly: false, // Configure Jodit options here
    placeholder: "About Course...",
    style: {
      background: "#21225f",
      color: "#08a9e6",
    },
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            courseTitle,
            insName,
            insEmail,
            seats,
            oldPrice,
            newPrice,
            category,
          } = data;
          const newItem = {
            img: imgURL,
            courseTitle,
            insName,
            insEmail,
            category,
            seats,
            rating: 4.5,
            oldPrice: parseFloat(oldPrice),
            newPrice: parseFloat(newPrice),

            classDetails,
            lastUpdated: "2023-09-04",
            duration: "5 hours 20 minutes",
            status: "pending",
          };

          axiosSecure.post("/addclasses", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="max-w-6xl  mx-auto text-center text-white">
      <div className=" px-10  items-center justify-center mx-auto text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4 ">
            <label className="label">
              <span className="label-text font-semibold text-white">
                Course Title
              </span>
            </label>
            <input
              type="text"
              placeholder="Course Title"
              {...register("courseTitle", { required: true, maxLength: 120 })}
              className="input input-bordered w-full bg-primary text-info"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-white">
                Instructor Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              {...register("insName", { required: true, maxLength: 120 })}
              className="input input-bordered w-full bg-primary text-info"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-white">
                Instructor Email*
              </span>
            </label>
            <input
              type="email"
              placeholder="instructor Email"
              {...register("insEmail", { required: true, maxLength: 120 })}
              className="input input-bordered w-full bg-primary text-info"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-white">
                Ablable Seats*
              </span>
            </label>
            <input
              type="text"
              placeholder="Ablable Seats"
              {...register("seats", { required: true, maxLength: 120 })}
              className="input input-bordered w-full bg-primary text-info"
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Category*</span>
              </label>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered bg-primary text-info"
              >
                <option disabled>Pick One</option>
                <option>Development</option>
                <option>Marketing</option>
                <option>Arts & Crafts</option>
                <option>Busniss</option>
                <option>Leadership</option>
                <option>Data Science</option>
                <option>Lifestyle</option>
                <option>Management</option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold text-white">
                  oldPrice*
                </span>
              </label>
              <input
                type="number"
                {...register("oldPrice", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full bg-primary text-info"
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold text-white">
                  newPrice*
                </span>
              </label>
              <input
                type="number"
                {...register("newPrice", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full bg-primary text-info"
              />
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white">About Course</span>
            </label>
            <JoditEditor
              value={classDetails}
              config={editorConfig}
              onBlur={(newContent) => setClassDetails(newContent)}
              style={{ backgroundColor: "primary" }}
            />
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text text-white">Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full bg-primary text-info"
            />
          </div>
          <input className="btn-primary mt-4" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
