import Banner from "../Banner/Banner";
import One from "../One/One";
import Three from "../Sections/Three/Three";
import TopCategories from "../TopCategories/TopCategories";
import TopCourses from "../TopCourses/TopCourses";
import Two from "../Two/Two";

const Home = () => {
  return (
    <div>
      <Banner />
      <One />
      <TopCategories />
      <TopCourses />
      <Two />
      <Three />
    </div>
  );
};

export default Home;
