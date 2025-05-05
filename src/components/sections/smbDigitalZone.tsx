import React from "react";
const SmbDigitalZone = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[85%] relative  flex flex-col gap-10">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center bg-opacity-5 !bg-no-repeat"
          style={{ background: `url(${"/images/Grid.png"})` }}
        >
          <div className="md:col-span-2 flex flex-col items-end">
            <h1 className=" text:[20px] md:text-[48px] font-bold  text-black ">
              WELCOME TO{" "}
              <span className="text-[#FFA500]">SMB DIGITALZONE,</span>
            </h1>

            <div className="w-[55%]">
              <p className="font-medium text-[32px]">
                your cosmic command center for digital supremacy in{" "}
                <span className="font-bold">Dubai, United Arab Emirates!</span>
              </p>

              <p className="text-[16px] opacity-50 pr-[70px] ">
                At SMB DigitalZone, we’re more than just a digital marketing
                agency; we’re your celestial navigators on a cosmic voyage
                through the ever-evolving digital universe.
              </p>

              <p className="text-[16px] opacity-50 pr-[70px] mt-4">
                Our mission? To guide businesses like yours through the nebulous
                digital realm and ensure you thrive amidst its swirling
                challenges and opportunities. We’ve assembled a star-studded
                team of seasoned navigators, each dedicated to plotting a course
                to your success.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-start relative">
            <img src="/images/team.jpeg" alt="team" className="object-cover " />
          </div>
        </div>

        <div className="flex justify-end pr-[60px]">
          <div className="absolute left-[-200px] bottom-0">
            <img
              src="/images/CEO.png"
              alt="ceo"
              className="min-w-[700px] h-[700px] object-cover"
            />
          </div>
          <div className="flex flex-col items-start ">
            <p>SINCE</p>
            <p className="text-[402px] bebas-neue-regular leading-[90%] text-[#0000000D]">
              2017
            </p>
          </div>
        </div>

        {/* Team Photo */}
      </div>
    </div>
  );
};

export default SmbDigitalZone;
