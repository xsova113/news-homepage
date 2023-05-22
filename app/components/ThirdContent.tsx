import Image from "next/image";
import { motion } from "framer-motion";


const ThirdContent = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-top mt-12 gap-5 sm:gap-6 sm:min-w-[1000px]">
      <div className="flex">
        <Image
          src={"/images/image-retro-pcs.jpg"}
          alt="image1"
          width={120}
          height={120}
          className="pr-5"
        />

        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-[#636474]">01</h1>
          <h2 className="my-2 sm:my-3 text-[15px] font-bold">Reviving Retro PCs</h2>
          <p className="text-[13px] text-[#636474]">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="flex">
        <Image
          src={"/images/image-top-laptops.jpg"}
          alt="image2"
          width={120}
          height={120}
          className="pr-5"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-[#636474]">02</h1>
          <h2 className=" my-2 sm:my-3 text-[15px] font-bold">
            Top 10 Laptops of 2022
          </h2>
          <p className="text-[13px] text-[#636474]">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className="flex">
        <Image
          src={"/images/image-gaming-growth.jpg"}
          alt="image3"
          width={120}
          height={120}
          className="pr-5"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-[#636474]">03</h1>
          <h2 className=" my-2 sm:my-3 text-[15px] font-bold">
            The Growth of Gaming
          </h2>
          <p className="text-[13px] text-[#636474]">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdContent;
