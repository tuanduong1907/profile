import React from "react";

const Logo = () => {
  return (
    <div>
      <a
        href="/"
        className="text-white text-4xl font-semibold select-none font-logo inline-block"
      >
        DT DEV
      </a>
      <div className="absolute top-0 left-4 w-[60px] h-[60px] rounded-full bg-purple-500 blur-3xl pointer-events-none z-[-1]"></div>
    </div>
  );
};

export default Logo;
