// eslint-disable-next-line react/prop-types
const CategoriesCompo = ({ text, img }) => {
  return (
    <div className="  bg-secondary hover:bg-info">
      <div className="flex gap-4 items-center px-5 py-4">
        <img
          src={img}
          alt=""
          className="w-10 h-10 text-info bg-info hover:bg-white"
        />
        <h1 className="text-xl font-bold text-white">{text}</h1>
      </div>
    </div>
  );
};

export default CategoriesCompo;
