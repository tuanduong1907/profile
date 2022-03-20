import React from "react";
import Logo from "../logo/Logo";
const Introduce = () => {
  return (
    <section className="relative mt-8 pb-[80px] lg:pb-[120px]">
      <Logo></Logo>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-x-[54px] gap-y-5 mt-[80px] lg:mt-[170px]">
        <div className="W-full max-w-[800px]">
          <div className="relative flex flex-col gap-2 lg:gap-8 text-[32px] leading-normal sm:leading-relaxed sm:text-6xl lg:text-6xl font-bold">
            <h1 className="text-white tracking-normal lg:tracking-[4px]">
              HELLO, MY NAME IS
            </h1>
            <h1 className="font-black text-white lg:tracking-[4px] text-transparent bg-primary-gradient bg-clip-text animate-pulse">
              DƯƠNG TUẤN
            </h1>
            <div className="absolute w-20 h-20 bg-[#F178B6] rounded-full left-16 z-[-1] blur-3xl"></div>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-x-5 rounded-xl p-8 bg-dark-gray shadow-lg mt-10">
            <div className="mb-10 lg:mb-0 w-[100px] h-[100px] rounded-full flex-shrink-0">
              <img
                src="avatar-3.jpg"
                alt=""
                className="w-full h-full rounded-full select-none object-cover shadow-lg"
              />
            </div>
            <p className="text-[#cbd5e1] text-center font-medium text-lg">
              " Mình là sinh viên của trường
              <span className="mx-1 text-sky-500">
                Cao Đăng Kỹ Thuật Công Nghệ Nha Trang
              </span>
              và đã tốt nghiệp. Mình rất đam mê lập trình
              <span className="text-sky-500"> Front End </span>, Mình thích code
              mã HTML CSS để tạo ra các sản phẩm đẹp và chất lượng mang lại trải
              nghiệm tốt cho người dùng. Mình đang cố gắng từng ngày để cải
              thiện kỹ năng và phát triển bản thân hơn."
            </p>
          </div>
          <a
            href="https://www.facebook.com/tuanduong.auto/"
            target="_blank"
            rel="noreferrer"
            className="block w-full lg:w-auto lg:inline-block mt-8"
          >
            <button className="btn w-full">
              <span className="sm:text-xl lg:text-base">Liên hệ mình</span>
            </button>
          </a>
        </div>
        <div className="relative flex-1 mb-10 lg:mb-0">
          <img
            src="avtar.jpg"
            alt=""
            className="w-[384px] sm:w-[600px] lg:w-full rounded-xl shadow-lg select-none"
          />
          <div className="absolute hidden lg:block w-20 h-20 bg-[#F178B6] rounded-full -top-4 -right-12 z-[-1] blur-3xl"></div>
          <div className="absolute hidden lg:block w-20 h-20 bg-[#5D5FEF] rounded-full -bottom-4 -right-12 z-[-1] blur-3xl"></div>
          <div className="absolute hidden lg:block w-20 h-20 bg-[#4CBEB1] rounded-full bottom-2/4 -left-12 z-[-1] blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
