import React from "react";

const Tick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      height="16"
      width="16"
    >
      <rect fill="black" rx="8" height="16" width="16"></rect>
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="1.5"
        stroke="white"
        d="M5 8.5L7.5 10.5L11 6"
      ></path>
    </svg>
  );
};

export default Tick;
