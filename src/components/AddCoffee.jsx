
import Swal from 'sweetalert2'

const AddCoffee = () => {


  const handleAddCoffee=(event)=>{
    event.preventDefault();
     const form =event.target;
     const name =form.name.value;
     const quantity = form.quantity.value;
     const supplier =form.supplier.value;
     const taste = form.taste.value;
     const catagory =form.catagory.value;
     const details =form.details.value;
     const photo =form.photo.value;
     const newCoffee ={name,quantity,supplier,taste,catagory,details,photo}
     console.log(newCoffee);
     fetch('http://localhost:5000/coffee',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body : JSON.stringify(newCoffee)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
  title: 'success!',
  text: 'Coffee Added',
  icon: 'success',
  confirmButtonText: 'Cool'
})
      }
     })

  }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-5xl text-center font-extrabold mb-5"> Add a coffee</h1>
    <form onSubmit={handleAddCoffee} >
        {/* form name and quantity row */}
        <div  className="md:flex">
        <div className="form-control md:w-1/2 ">
        <label className="label">
          <span className="label-text font-bold">Cofee Name</span>
        </label>
        <label className="input-group ">
          <input
            type="text"
            name="name"
            placeholder="Coffee Name"
            className="input input-bordered md:w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label">
          <span className="label-text font-bold">Available Quantity</span>
        </label>
        <label className="input-group ">
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            className="input input-bordered md:w-full"
          />
        </label>
      </div>
        </div>
        {/* form supplier and taste row */}
        <div  className="md:flex">
        <div className="form-control md:w-1/2 ">
        <label className="label">
          <span className="label-text font-bold">Supplier</span>
        </label>
        <label className="input-group ">
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            className="input input-bordered md:w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2 ml-4">
        <label className="label">
          <span className="label-text font-bold">Tase</span>
        </label>
        <label className="input-group ">
          <input
            type="text"
            name="taste"
            placeholder="Taste"
            className="input input-bordered md:w-full"
          />
        </label>
      </div>
        </div>
        {/* form category and details row */}
        <div  className="md:flex">
        <div className="form-control md:w-1/2 ">
        <label className="label">
          <span className="label-text font-bold">Catagory</span>
        </label>
        <label className="input-group ">
          <input
            type="text"
            name="catagory"
            placeholder="Catagory"
            className="input input-bordered md:w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 ml-4">
        <label className="label">
          <span className="label-text font-bold">Details</span>
        </label>
        <label className="input-group ">
          <input
            type="text"
            name="details"
            placeholder="details"
            className="input input-bordered md:w-full"
          />
        </label>
      </div>
        </div>
        {/* form photo url row */}
        <div  className="">
    
      <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text font-bold">Photo URL</span>
        </label>
        <label className="input-group ">
          <input
            type="text"
            name="photo"
            placeholder="photo url"
            className="input input-bordered w-full"
          />
        </label>
      </div>
        </div>
      
        <input className="btn btn-block mt-5" type="submit" value="Add a Cofee" />
    </form>
    </div>
  );
};

export default AddCoffee;
