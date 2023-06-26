// eslint-disable-next-line react/prop-types
const OneCompo = ({ image, number, text }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row md:gap-4 items-center justify-center">
      <div className="w-20 h-20 mb-2">
        <img src={image} alt="" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{number}</h1>
        <p className="text-base md:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
};

export default OneCompo;
