// eslint-disable-next-line react/prop-types
const DashSectionTitle = ({ name, title, subTitle }) => {
  return (
    <div className="bg-secondary text-info p-4 rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="">{subTitle}</p>
    </div>
  );
};

export default DashSectionTitle;
