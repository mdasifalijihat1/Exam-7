
const Footer = () => {
    return (

      
        <div className="bg-[#06091A] text-white md:mt-64 relative gap-8 ">
            <div className="container mx-auto relative">

              {/* card subscribe */}

            <div className=" md:absolute top-[-40%] left-0 md:w-full mt-10">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[384px] border-8 rounded-md ">
                  <div className="flex flex-col items-center my-16 gap-6">
                  <h3 className="font-bold text-xl md:text-3xl text-black"> Subscribe to our Newsletter </h3>
                  <p  className="font-bold md:text-xl text-[#131313]"> Get the latest updates and news right in your inbox! </p>
                  <div className="flex gap-2">
                    <input className="p-4 md:px-8 rounded-md" type="text" placeholder="Enter your email" />
                    <button className="p-4 md:px-8 rounded-md font-bold text-2xl text-black bg-orange-400  "> Subecribe </button>
                  </div>
                  </div>
                </div>
              </div>       

              {/* logo cricket */}
                 <div className="flex justify-center items-center pt-6 md:pt-48 pb-6">
                    <img className="w-[142px] h-[140px]" src="/images/logo-footer.png" alt="Loading images" />
                 </div>
                 {/* footer section  */}
<footer className="footer flex justify-around p-10 grid">
  <nav>
    <h6 className="font-bold text-xl">About Us</h6>
    <p>
    We are a passionate team <br />
     dedicated to providing the best <br />
      services to our customers.
    </p>
  </nav>
  <nav>
    <h6 className="font-bold text-xl">Quick Links</h6>
    <li> <a className="link link-hover">Home</a> </li>
    <li> <a className="link link-hover">Services</a> </li>
    <li> <a className="link link-hover">About </a> </li>
    <li> <a className="link link-hover">Contact</a> </li>
   
  </nav>
 
  <form>
    <h6 className="font-bold text-xl">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="mb-2 text-xl">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
</div>
<br />
<hr />
    <h3 className="flex items-center justify-center p-10"> @2024 Your Company All Rights Reserved. </h3>       
        </div>
    );
};

export default Footer;