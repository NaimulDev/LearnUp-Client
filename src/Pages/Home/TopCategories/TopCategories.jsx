import CategoriesCompo from "./CategoriesCompo";
import i from "../../../assets/icons/teacher.png";
import TopTitle from "../../../Components/TopTitle/TopTitle";

const TopCategories = () => {
  const categoriesItem = [
    { genre: "Development", name: "Development" },
    { genre: "Marketing", name: "Marketing" },
    { genre: "Arts", name: "Arts & Crafts" },
    { genre: "Busniess", name: "Busniess" },
    { genre: "Leadership", name: "Leadership" },
    { genre: "Data", name: "Data Science" },
    { genre: "Lifestyle", name: "Lifestyle" },
    { genre: "Management", name: "Management" },
  ];

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
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categoriesItem.map((category, index) => (
              <CategoriesCompo key={index} text={category.name} img={i} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopCategories;
