"use client";
import ProtectedRoute from "./AuthenticRouting/protected";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SmbDigitalZone from "@/components/sections/smbDigitalZone";

const Home = () => {
  return (
    <div className="w-[100%] max-w-[1700px] mx-auto bg-[#fcfcfc]">
      <div className="relative w-[100%] flex items-center justify-center">
        <h1
          className="text-[100px] sm:text-[200px]  md:text-[300px] lg:text-[400px] bebas-neue-regular leading-[100%] font-extrabold text-transparent bg-clip-text bg-center bg-cover"
          style={{
            backgroundImage: `url(${"/images/about-us.jpeg"})`,
          }}
        >
          ABOUT US
        </h1>
      </div>
      <SmbDigitalZone />
      <div className="bg-[#0f172a] pt-2">
        {/* star ship message */}
        <div className=" text-white w-[85%] mx-auto py-16 px-6 md:px-0 flex items-center justify-between relative">
          <button className="text-white border border-white p-3 rounded-full cursor-pointer">
            <FaArrowLeft size={16} />
          </button>
          <div className="max-w-3xl flex flex-col gap-y-[28px]">
            <h2 className="text-[24px] md:text-base text-center font-[400] uppercase">
              Message from the Captain of the Starship
            </h2>
            <p className="text-center text-[16px] font-[500] opacity-[0.5]">
              Led by our visionary founder, Simo Berrada, with over 25 years of
              cosmic experience in the UAE market, we're fueled by a passion for
              innovation and driven by a singular mission: to help businesses
              like yours ascend to cosmic greatness.
            </p>
            <p className="text-center text-[16px] font-[500] opacity-[0.5]">
              Thank you for considering SMB DigitalZone for your digital
              odyssey. <br />
              We're thrilled to embark on this cosmic journey with you and guide
              your business toward the stars.
            </p>
            <p className="text-center text-[16px] font-[500] opacity-[0.5]">
              Contact us today to learn more about our services and how we can
              help you reach your objectives. <br />
              Unlock the full potential of your online presence with SMB
              DigitalZone, your cosmic companion in the digital universe.
            </p>
          </div>
          <button className="text-white border border-white p-3 rounded-full cursor-pointer">
            <FaArrowRight size={16} />
          </button>
        </div>

        {/* contact  */}
        <div className="text-center pb-[72px] flex flex-col items-center">
          <div
            className="h-[5px] bg-white w-[400px]  blur-[4.9px] mb-[38px]"
            style={{ clipPath: "ellipse(50% 30%)" }}
          ></div>
          <h2 className="text-[25px] md:text-[35px] text-white font-[700] ">
            Contact Us &
          </h2>
          <h2 className="text-[25px] md:text-[35px] text-white font-[700] ">
            Let’s Build Your Dream Project.
          </h2>
          <button className="mt-[42px] bg-white text-[#0F172A] text-[14px] w-[177px] h-[51px] rounded-[15px] font-[700] hover:bg-gray-100 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute(Home);
