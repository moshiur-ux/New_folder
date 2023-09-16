/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import { FaDonate} from "react-icons/fa";
import {FaWpforms} from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
const[allActors,setAllactors]=useState([])
const [selectedActors,setSelectedActors]=useState([]);
const [remaining,setRemaining]=useState(0);
const [totalCost,setTotalCost]=useState(0);
   


useEffect(()=>
{

    fetch("./data.json")
    .then(res=>res.json())
    .then(data=>setAllactors(data))

},[])

const notify=(actor)=>
       {
        toast("First notification");
       }

const handleSelectActor=(actor)=>
  {

    const isExist =selectedActors.find(item=>item.id==actor.id)
  let count =actor.Credit;
    if(isExist)
    {
       return toast("You can't add again, Because this was exist already");
    }
    else{
       selectedActors.forEach((item)=>
       {
        count=count+item.Credit;
       })
       
       const totalRemaining=20-count;
    
       if(count>=20)
       {
        return toast("You can't add more, Because your remaning credit are over");

       }
       else{
        setTotalCost(count);

    
        setRemaining(totalRemaining);
 
         setSelectedActors([...selectedActors,actor])

       }
      

    }

    

  }




  return (
    <>
      <div className="text-center mb-6 font-extrabold text-4xl">
        <h1>Course Registration</h1>
      </div>
<hr />


      <div className="flex flex-col lg:flex-row gap-2">

      <div className="card-container">
        {
            allActors.map(actor=>
                (
                    <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="px-5 pt-5">
                      <img
                        src={actor.image}
                        alt="Shoes"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title font-bold">{actor.name}</h2>
                      <p className='font-semibold'>{actor.Details}</p>
                      <div className='flex justify-between gap-6'>
                        <p className='flex justify-between gap-2 text-sm'>< FaDonate/> Price:{actor.price}</p>
                        <p className='flex justify-between gap-1'> <FaWpforms/>Credit:{actor.Credit}hr</p>

                      </div>
                      <div class="card-actions">
                        <button onClick={()=>handleSelectActor(actor)} class="btn btn-info ">Selected</button>
                        
                        <ToastContainer />
                      </div>
                    </div>
                  </div>

                ))
        }
        
       
     
        
      </div>

      <div>
        <h2><Cart selectedActors={selectedActors} remaining={remaining}   totalCost={totalCost}></Cart></h2>
      </div>

      </div>

      
    </>
  );
};

export default Home;
