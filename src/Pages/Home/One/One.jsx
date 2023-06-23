import book from "../../../assets/icons/books.png";
import OneCompo from "./OneCompo";

const One = () => {
  return (
    <div className="bg-accent sm:h-96  py-8 md:py-0  md:h-60">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:pt-16 md:pt-20">
        <OneCompo image={book} number={"7500+"} text={"Course"} />
        <OneCompo image={book} number={"1500+"} text={"INSTRUCTORS"} />
        <OneCompo image={book} number={"165000+"} text={"STUDENTS"} />
        <OneCompo image={book} number={"100%"} text={"SATISFACTION"} />
      </div>
    </div>
  );
};

export default One;
