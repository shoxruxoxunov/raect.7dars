import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  return (
    <div className="bg-black">
      <div className="container flex justify-between pt-[74px]  pb-[105px]">
        <a
          href="/"
          className="text-[#fff] md:font-bold md:text-3xl font-normal text-lg mr-[45px]"
        >
          Shortly
        </a>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] md:font-bold md:text-[15px] font-normal text-[15px] mb-[22px] ">
            Features
          </h3>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Link Shortening
          </a>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Branded Links
          </a>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Analytics
          </a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] md:font-bold md:text-[15px] font-normal text-[15px] mb-[22px] ">
            Resources
          </h3>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Blog
          </a>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Developers
          </a>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Support
          </a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] md:font-bold md:text-[15px] font-normal text-[15px] mb-[22px] ">
            Company
          </h3>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            About
          </a>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Our Team
          </a>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0] ">
            Careers
          </a>
          <a className="text-[#9E9AA8] md:font-normal md:text-[15px] font-light text-[15px] hover:text-[#2BD0D0]">
            Contact
          </a>
        </div>
        <div className="flex gap-5">
          <FaInstagram className="w-[24px] h-[24px] text-white hover:text-[#2BD0D0]  " />
          <FaFacebook className="w-[24px] h-[24px] text-white  hover:text-[#2BD0D0] " />
          <LuTwitter className="w-[24px] h-[24px] text-white   hover:text-[#2BD0D0] " />
          <CiYoutube className="w-[24px] h-[24px] text-white   hover:text-[#2BD0D0] " />
        </div>
      </div>
    </div>
  );
}

export default Footer;
