// eslint-disable-next-line react/prop-types
const DashSectionTitle = ({ name, title, subTitle }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default DashSectionTitle;
