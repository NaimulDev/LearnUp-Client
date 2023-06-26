const LatestCart = (props) => {
  const { img, title, name, rating, oldPrice, newPrice } = props.data;

  return (
    <div className="text-white p-3">
      <div className="">
        <img src={img} alt="" className="mb-2 w-full" />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <h6>{name}</h6>
      <p>{rating}</p>
      <h2 className="text-2xl">
        ${oldPrice} <span> ${newPrice}</span>
      </h2>
    </div>
  );
};

export default LatestCart;
