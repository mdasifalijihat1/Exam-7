
const Banner = ({addCoine}) => {

    const handleButtonClick =() => {
        const amountToCoin = 6000000;
        addCoine(amountToCoin)
    };

    return (
        <div className='container mx-auto my-10'> 
            <div className=' h-[545px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <div className='flex flex-col items-center justify-center gap-6 py-20' >
                    <span><img src="/images/logob.png" alt="Loadign images" /></span>
                    <h3 className='font-bold text-1xl md:text-3xl text-white'> Assemble Your Ultimate Dream 11 Cricket Team </h3>
                    <p className='font-bold md:text-xl text-blue-100'> Beyond Boundaries Beyond Limits </p>
                    <button onClick={handleButtonClick}  className='btn border-[#E7FE29] bg-[#E7FE29]'>  Claim Free Credit </button>
                </div>
    
            </div>
        </div>
    );
};

export default Banner;