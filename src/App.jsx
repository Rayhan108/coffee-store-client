
import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffes=useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffes)
  // console.log(coffes);

  return (
    <>
     <h1 className='text-3xl text-center my-20'> Select Your Coffe </h1>
     <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} ></CoffeeCard>)
      }
     </div>
     </>
  )
}

export default App
