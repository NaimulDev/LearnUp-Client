import banner from "../../../assets/Banner/banner.png";
import moon from "../../../assets/Banner/moon.png";
import cover from "../../../assets/Banner/cover.png";
import planet from "../../../assets/Banner/planet.png";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative md:pl-6 bg-[#0e113d] text-white h-[940px] md:h-[800px]">
      <img src={cover} alt="" className="pt-14 hidden md:block" />
      <img
        src={planet}
        alt=""
        className="absolute right-0 top-40 hidden md:block"
      />

      <div className="flex-col md:flex-row lg:flex gap-36 top-4 absolute md:top-7 justify-between px-4 md:px-8">
        <div className="pt-16 md:pt-44 space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold">
            The World’s Leading
            <br />
            Distance Learning
            <br />
            Provider
          </h1>
          <p className="text-sm">
            Flexible easy to access learning opportunities can bring a
            significant change in how individuals
            <br className="hidden md:block" />
            prefer to learn! The Ellen can offer you to enjoy the beauty of
            eLearning!
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="form-control relative mb-4 md:mb-0">
              <input
                type="text"
                placeholder="  Search for anything"
                className="input w-full md:pl-9 md:w-96 h-16 md:h-12 font-bold text-white bg-[#191919]"
              />
              <FaSearch className="absolute top-4 left-4 text-sm text-blue-500" />
            </div>
            <button className="font-bold py-2 px-2 sm:px-2 md:px-6 bg-accent hover:bg-red">
              Search Course New
            </button>
          </div>
        </div>

        <div className="flex justify-center pt-5 md:pt-0">
          <img src={banner} alt="" className="" />
        </div>
      </div>
      <img src={moon} alt="" className="absolute top-5 right-96" />
    </div>
  );
};

export default Banner;
