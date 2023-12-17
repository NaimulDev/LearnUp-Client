import { useEffect, useState, useRef } from "react";

const useCourses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState("");
  // const [error, setError] = useState(null);
  // const searchRef = useRef(null);
  const api = import.meta.env.VITE_API_URL;
  // const handleSearch = () => {
  //   if (searchRef && searchRef.current) {
  //     setSearch(searchRef.current.value);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access-token");

        const response = await fetch(`${api}/class`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const approvedClasses = data.filter(
          (classItem) => classItem.status === "approved"
        );

        setClasses(approvedClasses);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  });

  return { classes, loading };
};

export default useCourses;
