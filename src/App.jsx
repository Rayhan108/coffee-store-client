
import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffes=useLoaderData();
  console.log(coffes);

  return (
    <>
     <h1 className='text-3xl text-center my-20'> Select Your Coffe </h1>
     <div className='grid md:grid-cols-2 gap-4'>
      {
        coffes.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
     </div>
     </>
  )
}

export default App
