import TopTitle from "../../../../Components/TopTitle/TopTitle";
import icon1 from "../../../../assets/logo/icon1.png";
import icon2 from "../../../../assets/logo/icon2.png";
import icon3 from "../../../../assets/logo/icon3.png";
import icon4 from "../../../../assets/logo/icon4.png";
import icon5 from "../../../../assets/logo/icon5.png";
import icon6 from "../../../../assets/logo/icon6.png";
import icon7 from "../../../../assets/logo/icon7.png";
import icon8 from "../../../../assets/logo/icon8.png";
import icon9 from "../../../../assets/logo/icon9.png";
import InfiniteCardSlider from "../Four/InfiniteCardSlider";

const Three = () => {
  return (
    <>
      <div className="px-4 md:mx-32 md:my-16   md:p-14  bg-secondary">
        <div className="flex-1 md:flex  gap-8">
          <div className="space-y-5 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
              Trusted by companies
            </h1>
            <p>
              Explore all of our courses and pick your suitable
              <br />
              ones to enroll and start learning with us!
            </p>
            <button className="px-6 py-4 bg-black text-info">About Us</button>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
              <img src={icon5} alt="" />
              <img src={icon6} alt="" />
              <img src={icon7} alt="" />
              <img src={icon8} alt="" />
              <img src={icon9} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:mx-32 ">
        <TopTitle
          title={"Learners say about Ellen"}
          subTitle={
            "Explore all of our courses and pick your suitable ones to enroll and start learning with us!"
          }
        />
        <div className="">
          <InfiniteCardSlider />
        </div>
      </div>
    </>
  );
};

export default Three;
