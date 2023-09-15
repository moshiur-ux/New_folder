/* eslint-disable react/prop-types */
import './Cart.css'
const Cart = ({selectedActors ,remaining }) => {
    return (
        <div className='border p-10 via-pink-100'>
            <h2 className='text-blue-500 mb-5 font-extrabold'>Credit Hour Remaining: {remaining} </h2>
            <hr />
             
             <h2 className='mb-5 font-bold text-3xl'>Course Name:</h2>
             <hr />
            
             {


                selectedActors.map(actor=>
                    (
                       <li key={actor.id}>{actor.id}.{actor.name}</li> 
                    ))
            }
            <hr  />

            <h5 className='mb-5 font-extrabold mt-4'>Total Credit Hour:{selectedActors.length} hr</h5>
             <hr />
            

            
        </div>
    );
};

export default Cart;