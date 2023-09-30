import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import ClassCart from "../ClassesPages/ClassCart";

const CourseCategory = () => {
  const { category } = useParams();
  const [axiosSecure] = useAxiosSecure();
  console.log(category);
  const {
    data: classes = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/class");
        return res.data;
      } catch (error) {
        console.error("Error fetching class:", error);
        throw error;
      }
    },
  });
  const filteredClasses = useMemo(() => {
    return classes.filter((classItem) => classItem.category === category);
  }, [classes, category]);

  console.log(filteredClasses);
  if (filteredClasses.length === 0) {
    return (
      <div className="text-center items-center py-14">
        <h1 className="text-white">Course Not available</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mx-4 md:mx-36 lg:mx-14">
        {filteredClasses.map((classItem, idx) => (
          <ClassCart key={idx} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
