import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useCourses from "../../hooks/useCourses";

const searchBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setInput] = useState("");
  // const { loading, classes } = useCourses();

  const fetchData = (value) => {
    fetch(
      "http://localhost:5000/class"
        .then((Response) => Response.json())
        .then((json) => {
          console.log(json);
        })
    );
    const result = json.filter((course) => {
      return (
        course && course.title && course.title.toLowerCase().includes(value)
      );
    });
    console.log(result);
  };
  const handleChange = () => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        type="text"
        // ref={searchRef}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        // onChange={handleSearch}
        placeholder="Search for anything"
        className="input  w-24 h-11 md:w-auto font-bold text-white bg-[#191919]"
      />
      <FaSearch
        onClick={handleSearch}
        className="absolute top-3 right-4 text-2xl text-blue-500 hover:text-red"
      />
    </div>
  );
};

export default searchBar;
