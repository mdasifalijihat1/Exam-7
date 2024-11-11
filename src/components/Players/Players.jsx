import React, { useEffect, useState } from 'react';
import { FcBusinessman } from "react-icons/fc";
import { IoFlagSharp } from "react-icons/io5";

const Players = ({addChosePlayer, choosePlayer}) => {

    const [player, setPlayer] = useState([])
    useEffect(() => {
         fetch('./teamplayer.json')
        .then(res => res.json())
        .then(data => setPlayer(data))
    },[])

    return (
        <div className='container mx-auto'>  

{/* Available Player section  */}
    <div className='flex justify-between items-center mb-10'>
            <div>              
                <h3 className='font-bold text-xl '> Available Players </h3>          
            </div> 
           
            <div className='flex  items-center '>
                <button className='btn bg-[#E7FE29]'> Available </button>
                <button className='btn' > Selected {choosePlayer.length} </button>
          
            </div>    </div>             
<div className='grid md:grid-cols-3 gap-6'>

    {/* player map and card show  */}
 {
   player.map(players =>  

  <div key={players.Rating} className="card bg-base-100  border-2">
  <figure className="px-6 pt-6">
    <img
      src={players.image_url}
      alt="Shoes"
      className="rounded-xl h-[240px] w-[500px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title "> <FcBusinessman /> {players.PlayerName}</h2>
    <div className='flex justify-between items-center py-2'>
        <h3 className='flex gap-2 items-center'> <IoFlagSharp />
        {players.Country}</h3>
        <h4 className='btn p-2 rounded-md' > {players.PlayerType}</h4>   
    </div>
    <hr />
    <p>Rating</p>
    <div className='flex justify-between items-center'>
        <h3> {players.BatsMane}</h3>
        <h4 className='' > {players.Bowling}</h4>   
    </div>
    <div className="card-actions flex items-center justify-between pt-4">
        <h3> Price: ${players.Price}</h3>
         <button onClick={() => addChosePlayer(players)} className="btn ">Choose Player </button>
    
    </div>
  </div>
     </div>
            )
         }  
            </div>
            
        </div>
    );
};

export default Players;


