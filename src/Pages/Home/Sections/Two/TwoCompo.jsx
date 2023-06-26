// eslint-disable-next-line react/prop-types
const TwoCompo = ({ image, number, text }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row md:gap-4 items-center justify-center">
      <div className="w-16 h-16 mb-2">
        <img src={image} alt="" />
      </div>
      <div>
        <h1 className="text-2xl  font-bold">{number}</h1>
        <p className="text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default TwoCompo;
