import { MdDeleteForever } from "react-icons/md";

const SelectedPlayer = ({choosePlayer, handleRemoved}) => {
    return (
        <div className='container mx-auto mt-10'>

 <div >
    {/* selected Player section  */}
          <div className='flex justify-between items-center mb-10'>
          
          <div>              
                <h3 className='font-bold text-xl '>  Selected Players ({choosePlayer.length}/6) </h3>          
            </div> 
         
            <div className='flex  items-center '>
                <button  className={"btn bg-[#E7FE29]"}> Available  </button>
                <button  className={"btn bg-[#E7FE29]"} > Selected ({choosePlayer.length}) </button>
            </div>
          </div>

        
            {/* show player section  */}
<div>
 <div className="overflow-x-auto">
  <table className="table">       
     <tbody>  
        {
         choosePlayer.slice(0, 6).map((player, index) =>(

            <tr className="flex justify-between" key={player.index}>      
            <td>
                 <div className="flex items-center gap-3">
                   <div className="avatar">
                     <div className="mask mask-squircle h-12 w-12">
                       <img
                         src={player.image_url}
                         alt="Avatar Tailwind CSS Component" />
                     </div>
                   </div>
                   <div>
                     <div className="font-bold">{player.PlayerName}</div>
                     <div className="text-sm opacity-50">{player.PlayerType}</div>
                   </div>
                 </div>
               </td>     
               <th>
                 <button onClick={()=>handleRemoved(player)} className="btn btn-ghost btn-xs"> <MdDeleteForever className="w-8 h-8 text-orange-500" /> </button>
               </th>
               </tr>

         ))   
        }    
    </tbody>   
  </table>

  <div className="m-6">
    
    <button onClick={"/src/components/Players/Players.jsx"} className="btn bg-[#E7FE29]" >  Add More Player  </button>
  </div>
</div>
</div>
            
      </div>  
            
        </div>
    );
};

export default SelectedPlayer;

