import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee=useLoaderData()
    console.log(coffee);
    const {_id, name, quantity, supplier, taste, catagory, details, photo}=coffee;
    
  const handleUpdateCoffee=(event)=>{
    event.preventDefault();
     const form =event.target;
     const name =form.name.value;
     const quantity = form.quantity.value;
     const supplier =form.supplier.value;
     const taste = form.taste.value;
     const catagory =form.catagory.value;
     const details =form.details.value;
     const photo =form.photo.value;
     const updatedCoffee ={name,quantity,supplier,taste,catagory,details,photo};
     console.log(updatedCoffee);
     fetch(`http://localhost:5000/coffee/${_id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body : JSON.stringify(updatedCoffee)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
  title: 'success!',
  text: 'Coffee Updated',
  icon: 'success',
  confirmButtonText: 'Cool'
})
      }
     })

  }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className="text-5xl text-center font-extrabold mb-5"> Update a coffee: {name}</h1>
      <form onSubmit={handleUpdateCoffee} >
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
              defaultValue={name}
              
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
              defaultValue={quantity}
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
              defaultValue={supplier}
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
              defaultValue={taste}
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
              defaultValue={catagory}
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
              defaultValue={details}
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
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </label>
        </div>
          </div>
        
          <input className="btn btn-block mt-5" type="submit" value="Update a Cofee" />
      </form>
      </div>
    );
};

export default UpdateCoffee;