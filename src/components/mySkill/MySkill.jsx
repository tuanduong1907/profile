import React from "react";
import { dataSkill } from "../../dataSkill/dataSkill";

const MySkill = () => {
  return (
    <section className="pb-[80px] lg:pb-[93px]">
      <h2 className="text-4xl text-white text-center lg:text-left font-bold">
        Kỹ năng của mình:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-[64px] mt-9">
        {dataSkill.map((item) => (
          <div className="flex flex-col items-center gap-y-4" key={item.id}>
            <div>
              <img
                src={item.image}
                alt=""
                className="w-[150px] h-[150px] object-cover select-none"
              />
            </div>
            <span className="text-xl text-gray-color font-semibold">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkill;
