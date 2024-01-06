import React from "react";

const Gradient = () => {
  return (
    <div>
      <div class="fixed top-0 -z-10">
        <div class="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
      </div>
      <div class="fixed top-0 end-0 -z-10">
        <div class="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
      </div>
      <div class="fixed inset-0 flex items-center justify-center -z-10">
        <div class="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
      </div>
      <div class="fixed bottom-0 start-0 -z-10">
        <div class="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
      </div>
      <div class="fixed bottom-0 end-0 -z-10">
        <div class="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
      </div>
    </div>
  );
};

export default Gradient;
