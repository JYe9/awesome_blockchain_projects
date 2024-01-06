import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollUp = () => {
  return (
    <button
      id="back-to-top"
      onclick="topFunction()"
      class="fixed text-xl rounded-full z-10 bottom-5 end-5 h-8 w-8 text-center bg-white backdrop-blur-3xl text-slate-950 flex justify-center items-center transition-all duration-500 hover:bg-primary hover:text-white hover:rounded-lg"
    >
      <i data-lucide="chevron-up">
        <FaArrowUp />
      </i>
    </button>
  );
};

export default ScrollUp;
