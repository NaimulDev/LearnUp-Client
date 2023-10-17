import { Link } from "react-router-dom";
import TopTitle from "../../../../Components/TopTitle/TopTitle";

const Five = () => {
  return (
    <div className="bg-accent  items-center text-center">
      <div className="px-48 py-24 ">
        <div className="flex justify-between my-10">
          <div className="text-white space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Transform access to education
            </h1>
            <p className="text-xs md:text-sm">
              Explore all of our courses and pick your suitable ones to enroll
              and start learning with us!
            </p>
          </div>
          <div className="hidden md:block">
            <div>
              <Link to="/signup">
                <button className="px-8 py-3 text-info bg-secondary hover:bg-red hover:text-white">
                  Register For Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
