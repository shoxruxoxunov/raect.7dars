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
          <div className="md:flex md:justify-between md:gap-[25px] pt-[56px] md:pb-[56px] ">
            <div className="bg-[#fff] w-[350px] h-[267px] rounded-md">
              <div className="bg-[#3A3054] rounded-[50px] w-[88px] h-[88px]">
                <img src="public/assets/Combined Shape.png " alt="" />
              </div>
              <p className="text-[#34313D] md:font-bold md:text-[22px] font-medium text-[22px]">
                Brand Recognition
              </p>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="bg-[#fff] w-[350px] h-[267px] rounded-md md:mt-[50px]">
              <div className="bg-[#3A3054] rounded-[50px] w-[88px] h-[88px]">
                <img src="public/assets/Combined Shape.png1.png " alt="" />
              </div>
              <p className="text-[#34313D] md:font-bold md:text-[22px] font-medium text-[22px]">
                Fully Customizable
              </p>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="bg-[#fff] w-[350px] h-[267px] rounded-md md:mt-[100px]">
              <div className="bg-[#3A3054] rounded-[50px] w-[88px] h-[88px]">
                <img src="public/assets/Shape.png" alt="" />
              </div>
              <p className="text-[#34313D] md:font-bold md:text-[22px] font-medium text-[22px]">
                Detailed Records
              </p>
              <p className="text-[#9E9AA8] ">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
