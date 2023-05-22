import Image from "next/image";
import React from "react";

const FirstContent = () => {
  return (
    <div className="flex flex-col h-full">
      {/* image for mobile mode */}
      <Image
        src={"/images/image-web-3-mobile.jpg"}
        alt="image"
        width={300}
        height={500}
        className="sm:hidden block w-full"
      />

      {/* image for desktop mode */}
      <Image
        src={"/images/image-web-3-desktop.jpg"}
        alt="deskopt image"
        width={500}
        height={450}
        className="hidden sm:block pt-7 w-[550px] h-[250px] md:h-[300px] md:w-[650px]"
      />

      <div className="flex flex-col sm:flex-row">
        <h1 className="text-[$00001A] font-extrabold text-[36px] sm:text-[35px] sm:leading-[60px] md:text-[40px] md:leading-[60px] lg:leading-[55px] leading-9 mt-5 sm:w-[250px] sm:-mb-3">
          The Bright Future of Web 3.0?
        </h1>

        <div className="flex flex-col">
          <p className=" text-[#636474] text-[15px] py-5 sm:px-4 sm:w-[250px] md:w-[340px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="py-3 mt-2 sm:ml-4 w-[190px] tracking-[4px] font-semibold bg-[#F15E50] text-white hover:bg-[#00001A] transition">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
