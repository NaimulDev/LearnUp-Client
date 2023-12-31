import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TopTitle = ({ title, subTitle, btn }) => {
  return (
    <div className="flex justify-between my-10">
      <div className="text-white space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-xs md:text-sm">{subTitle}</p>
      </div>
      <div className="hidden md:block">
        <div>
          <Link to="/courses">
            <button className="px-8 py-3 text-info bg-secondary hover:bg-info hover:text-white">
              {btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopTitle;
