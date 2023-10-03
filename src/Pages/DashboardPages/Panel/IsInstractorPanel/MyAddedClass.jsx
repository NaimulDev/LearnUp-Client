import { Helmet } from "react-helmet-async";
// import DashSectionTitle from "../../../component/DashboardSectionTitle";
// import { instructorsFetch } from "../../../api/useClasses";
import { Link } from "react-router-dom";
import { instructorsFetch } from "../../../../hooks/useClasses";
import DashSectionTitle from "../../../../Components/dashSectionTitle/DashSectionTitle";

const MyAddedClass = () => {
  const [instructor] = instructorsFetch();
  console.log(instructor);

  return (
    <div>
      <Helmet>
        <title>LearnUP || All Classes</title>
      </Helmet>
      <DashSectionTitle
        name="Classes"
        title="My All Classes"
        subTitle="see all Class !"
      />
      <div className="overflow-x-auto">
        <table
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="table"
        >
          {/* head */}
          <thead>
            <tr className="text-xl text-center">
              <th>Image</th>
              <th>Classes</th>
              <th>Status</th>
              <th>Total seats</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {instructor.map((item) => (
              <tr key={item._id} className="bg-base-200 text-lg text-center">
                <td>
                  <div className="mask mask-squircle w-20 h-16">
                    <img
                      src={item?.img}
                      alt="Avatar Tailwind CSS Component"
                      className="w-full"
                    />
                  </div>
                </td>
                <td>
                  <spna className="text-xl font-semibold">
                    {item?.category}
                  </spna>
                </td>
                <td>{item?.status}</td>
                <td>{item?.seats}</td>
                <td>
                  <Link to={`/dashboard/myclass/update/${item?._id}`}>
                    <button className="bg-green-600 text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-green-800 transition duration-200">
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedClass;
