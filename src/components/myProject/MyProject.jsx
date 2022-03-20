import React from "react";
import { dataProject } from "../../dataProject/dataProject.js";
import "./MyProject.css";

const MyProject = () => {
  return (
    <section className="pb-[93px]">
      <h2 className="text-4xl text-center lg:text-left text-white font-bold">
        Sản phẩm của mình:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-9">
        {dataProject.map((item) => (
          <div className="flex flex-col" key={item.id}>
            <div className="rounded-xl flip-card">
              <div className="rounded-xl shadow-xl flip-card-inner">
                <div className="rounded-2xl front">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-2xl object-cover select-none"
                  />
                </div>
                <div className="rounded-xl back flex flex-col justify-center items-center bg-[#1E293B]">
                  <p className="text-lg text-gray-color text-left mb-10">
                    Build: {item.build}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="inline-block cursor-pointer px-10 py-4 bg-sky-500 text-white text-lg font-semibold rounded-lg hover:opacity-75 transition-all"
                    rel="noreferrer"
                  >
                    Xem sản phẩm
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href={item.link}
                className="inline-block mt-4 text-primary-color text-xl font-semibold hover:text-sky-500 transition-all"
              >
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProject;
