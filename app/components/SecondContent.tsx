const SecondContent = () => {
  return (
    <div className="flex flex-col bg-[#00001A] text-white mt-14 sm:mt-7 sm:ml-6 p-7 sm:min-w-[400px]">
      <h1 className="text-[#FFCE8A] text-3xl mb-6 font-semibold">New</h1>

      <div>
        <h2 className="mb-2 font-semibold text-[1.125rem]">
          Hydrogen VS Electric Cars
        </h2>
        <p className="opacity-80 text-[.9375rem]">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>

      <hr className="my-8 opacity-50" />

      <div>
        <h2 className="mb-2 font-semibold text-[1.125rem]">
          The Downsides of AI Artistry
        </h2>
        <p className="opacity-80 text-[.9375rem]">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>

      <hr className="my-8 opacity-50" />

      <div>
        <h2 className=" font-semibold text-[1.125rem]">
          Is VC Funding Drying Up?
        </h2>
        <p className="opacity-80 text-[.9375rem]">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default SecondContent;
