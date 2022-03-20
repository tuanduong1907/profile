import React from "react";

const Partner = () => {
  return (
    <section className="pb-0 lg:pb-10">
      <h2 className="text-4xl text-white font-bold text-center">
        Là đối tác của
      </h2>
      <div className="flex w-full lg:w-[33.3333%] sm:w-full justify-center mx-auto items-center">
        <img
          src="logo-cntt.webp"
          alt=""
          className="h-[300px] sm:w-auto w-[300px] object-cover select-none"
        />
      </div>
    </section>
  );
};

export default Partner;
