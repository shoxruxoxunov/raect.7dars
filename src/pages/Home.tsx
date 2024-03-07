function Home() {
  return (
    <section>
      <div className="container  ">
        <div className="md:flex md:justify-between">
          <div>
            <h1 className="text-[#34313D] md:font-bold md:text-[80px] font-normal text-[42px] md:w-[566px]">
              More than just shorter links
            </h1>
            <p className="md:font-semibold md:text-[22px] font-normal text-[15px] text-[#9E9AA8] md:w-[540px] mb-[38px]">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="text-[#FFFFFF] md:font-bold md:text-[20px] font-medium text-[20px] py-[20px] px-[15px] bg-[#2BD0D0] hover:bg-[#9AE3E3] rounded-[50px]">
              Get Started
            </button>
          </div>
          <div className="">
            <img
              className="md:relative top-[px] bottom-[0px] right-[0px] left-[225px]"
              src="./assets/working_with_computer.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[url('public/assets/Path.png')] md:w-[1110px] md:h-[168px] rounded-lg md:relative top-[80px] ">
          <form className="pt-[52px] pb-[52px] pl-[64px]">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="input input-bordered md:w-[769px] md:h-[64px] mr-[25px]"
            />
            <button className="bg-[#2BD0D0] text-[#fff] md:font-bold md:text-[25px] py-[12px] px-[25px] rounded-[10px] hover:bg-[#9AE3E3]">
              Shorten It!
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[rgb(239,241,247)]  ">
        <div className="container md:pt-[120px]">
          <h3 className="md:font-bold md:text-[40px] font-medium text-[20px] text-center mb-[18px]">
            Advanced Statistics
          </h3>
          <p className="md:font-semibold md:text-[18px] font-normal text-[18px] text-center  text-[#9E9AA8] ">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
          <div className="md:flex md:justify-between  pt-[56px] md:pb-[56px] ">
            <div className="bg-[#fff] w-[350px] h-[267px] rounded-md">
              <div className="pl-[32px]">
                <div className="bg-[#3A3054] rounded-[50px] w-[88px] h-[88px] mt-[-40px] mb-[33px] ">
                  <img
                    className="relative left-[20px] top-[20px]"
                    src="./assets/Combined Shape.png "
                    alt=""
                  />
                </div>
                <p className="text-[#34313D] md:font-bold md:text-[22px] font-medium text-[22px] mb-[12px] ">
                  Brand Recognition
                </p>
                <p className="text-[#9E9AA8] md:font-semibold md:text-[15px] font-medium text-[15px]">
                  Boost your brand recognition with <br /> each click. Generic
                  links don’t mean a <br /> thing. Branded links help instil{" "}
                  <br /> confidence in your content.
                </p>
              </div>
            </div>
            <div className="relative top-[170px] bg-[#2BD0D0] w-[25px] h-1"></div>
            <div className="bg-[#fff] w-[350px] h-[267px] rounded-md md:mt-[50px]">
              <div className="pl-[32px]">
                <div className="bg-[#3A3054] rounded-[50px] w-[88px] h-[88px] mt-[-40px] mb-[33px] ">
                  <img
                    className="relative left-[20px] top-[20px]"
                    src="./assets/Combined Shape.png1.png "
                    alt=""
                  />
                </div>
                <p className="text-[#34313D] md:font-bold md:text-[22px] font-medium text-[22px] mb-[12px]">
                  Fully Customizable
                </p>
                <p className="text-[#9E9AA8] md:font-semibold md:text-[15px] font-medium text-[15px]">
                  Gain insights into who i <br /> clicking your links. Knowing
                  when <br /> and where people engage with <br /> your content
                  helps inform better decisions.
                </p>
              </div>
            </div>
            <div className="relative top-[170px] bg-[#2BD0D0] w-[25px] h-1"></div>
            <div className="bg-[#fff] w-[350px] h-[267px] rounded-md md:mt-[100px]">
              <div className="pl-[32px]">
                <div className="bg-[#3A3054] rounded-[50px] w-[88px] h-[88px] mb-[33px] mt-[-40px]">
                  <img
                    className="relative left-[20px] top-[20px]"
                    src="./assets/Shape.png"
                    alt=""
                  />
                </div>
                <p className="text-[#34313D] md:font-bold md:text-[22px] font-medium text-[22px] mb-[12px] ">
                  Detailed Records
                </p>
                <p className="text-[#9E9AA8] md:font-semibold md:text-[15px] font-medium text-[15px]">
                  Improve brand awareness and content <br /> discoverability
                  through customizable <br /> links, supercharging audience{" "}
                  <br /> engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4B3F6B]">
        <div className="container ">
          <div className="flex flex-col items-center">
            <h2 className="text-white md:font-bold md:text-[40px] font-normal text-[40px] text-center pt-[57px] mb-[32px]">
              Boost your links today
            </h2>
            <button className="text-white md:font-bold md:text-[20px] font-normal text-[20px] bg-[#2BD0D0] hover:bg-[#9AE3E3] py-[15px] px-[40px] rounded-[50px] mb-[69px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
