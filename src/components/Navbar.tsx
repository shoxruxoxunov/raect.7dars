function Navbar() {
    return (
      <div className="container pt-[50px] flex items-center mb-[146px]">
        <a
          href="/"
          className="text-[#4d485f] md:font-bold md:text-3xl font-normal text-lg mr-[45px]"
        >
          Shortly
        </a>
        <ul className="flex gap-[25px] mr-auto">
          <li>
            <a
              className="text-[#9E9AA8] md:font-bold md:text-[15px] font-normal text-[15px] hover:text-black"
              href=""
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="text-[#9E9AA8] md:font-bold md:text-[15px] font-normal text-[15px] hover:text-black"
              href=""
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="text-[#9E9AA8] md:font-bold md:text-[15px] font-normal text-[15px] hover:text-black"
              href=""
            >
              Resources
            </a>
          </li>
        </ul>
        <div>
          <button className="text-[#9E9AA8] md:font-bold md:text-[15px] font-normal text-[15px] hover:text-black mr-[37px]">
            Login
          </button>
          <button className="text-[#FFFFFF] md:font-bold md:text-[15px] font-normal text-[15px] hover:text-[#9AE3E3] py-[8px] px-[21px] bg-[#2BD0D0] rounded-[50px] ">
            Signup
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  