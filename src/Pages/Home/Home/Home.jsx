import Banner from "../Banner/Banner";
import One from "../Sections/One/One";
import Sections from "../Sections/Sections";
import Two from "../Sections/Two/Two";

import TopCategories from "../TopCategories/TopCategories";
import TopCourses from "../TopCourses/TopCourses";

const Home = () => {
  return (
    <div>
      <Banner />
      <One />
      <TopCategories />
      <TopCourses />
      <Two />
      <Sections />
    </div>
  );
};

export default Home;
