import CategoriesCompo from "./CategoriesCompo";
import i from "../../../assets/icons/teacher.png";
import TopTitle from "../../../Components/TopTitle/TopTitle";
const TopCategories = () => {
  return (
    <>
      <div className="pt-24 px-4 md:px-32 pb-5">
        <TopTitle
          title={"Top categories"}
          subTitle={
            "Explore all of our courses and pick your suitable ones to enroll and start learning with us!"
          }
          btn={"view All Course"}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CategoriesCompo text={"Development"} img={i} />
          <CategoriesCompo text={"Development"} img={i} />
          <CategoriesCompo text={"Development"} img={i} />
          <CategoriesCompo text={"Development"} img={i} />
          <CategoriesCompo text={"Development"} img={i} />
          <CategoriesCompo text={"Development"} img={i} />
          <CategoriesCompo text={"Development"} img={i} />
          <CategoriesCompo text={"Development"} img={i} />
        </div>
      </div>
    </>
  );
};

export default TopCategories;
