import { FaCoins } from "react-icons/fa";
const Header = ({coine}) => {
       
    return ( 
        <div className='container mx-auto mt-8 sticky top-0 z-10 bg-white'>
           <nav className='flex justify-between items-center gap-4 mx-10 md:mx-0'>
            <ul>
                <span>
                <img className='w-[73px] h-[72px]' src='/images/logo.png' alt="Lodding img " />
                </span>
            </ul>
            <ul className='flex justify-center items-center gap-12 '>
                <ul className=" hidden md:block md:flex gap-12 ">
                <li> Home</li>
                <li> Fixture </li>
                <li> Team </li>
                <li> Schedules </li>
                </ul>
                 <button className='btn flex items-center justify-center gap-2'> {coine}  Coin <FaCoins className="text-orange-500" />
                   
                    </button>
            </ul>
           </nav>
        </div>
    );
};

export default Header;
