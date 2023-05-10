const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, catagory, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="  flex w-full justify-between pr-4">
      <div className="mt-10 pl-4 ">
      <h2 className="card-title">{name}</h2>
        <p>{taste}</p>
        <p>{supplier}</p>
        <p>{quantity}</p>
      </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-3">
            <button className="btn ">View</button>
            <button className="btn">Edit</button>
            <button className="btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
