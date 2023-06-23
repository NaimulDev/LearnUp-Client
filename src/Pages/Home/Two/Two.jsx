import book from "../../../assets/icons/books.png";
import TwoCompo from "./TwoCompo";

const Two = () => {
  return (
    <div className="bg-accent my-20 md:ml-12 sm:h-96  py-8 md:py-0  md:h-60">
      <div className="flex-1 md:flex justify-evenly space-y-9  md:pl-20  gap-0 sm:pt-16 md:pt-20">
        <TwoCompo
          image={book}
          number={"Learn the Latest"}
          text={"Top Skills"}
        />
        <TwoCompo
          image={book}
          number={"Learn From"}
          text={"Industry Experts"}
        />
        <TwoCompo image={book} number={"Learn in Your Own"} text={"Pace"} />
      </div>
    </div>
  );
};

export default Two;
