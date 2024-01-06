import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      class="relative overflow-hidden pt-[72px] bg-default-950/40 backdrop-blur-3xl"
    >
      <div class="absolute h-14 w-14 bg-primary/10 top-2/3 start-80 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"></div>
      <div class="absolute h-14 w-14 bg-primary/20 top-2/3 end-80 -z-1 rounded-full animate-ping"></div>

      <div class="px-6 pt-20 overflow-hidden">
        <div class="relative">
          <div class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-default-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full animate-spin-slow"
            >
              <path
                class="stroke-white/10"
                d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                stroke-opacity="0.7"
              ></path>
              <path
                d="M513 1025C230.23 1025 1 795.77 1 513"
                stroke="url(#:S2:-gradient-1)"
                stroke-linecap="round"
              ></path>
              <defs>
                <linearGradient
                  id=":S2:-gradient-1"
                  x1="1"
                  y1="513"
                  x2="1"
                  y2="1025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7c3aed"></stop>
                  <stop offset="1" stop-color="#7c3aed" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full animate-spin-reverse-slower"
            >
              <path
                class="stroke-white/10"
                d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                stroke-opacity="0.7"
              ></path>
              <path
                d="M913 513c0 220.914-179.086 400-400 400"
                stroke="url(#:S2:-gradient-2)"
                stroke-linecap="round"
              ></path>
              <defs>
                <linearGradient
                  id=":S2:-gradient-2"
                  x1="913"
                  y1="513"
                  x2="913"
                  y2="913"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7c3aed"></stop>
                  <stop offset="1" stop-color="#7c3aed" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="container">
            <div class="py-14 text-center relative">
              <div class="flex justify-center">
                <div class="max-w-2xl">
                  <h2 class="md:text-6xl/tight text-5xl text-default-100 font-semibold mb-6">
                    Make short videos From long ones instantly
                  </h2>
                  <p class="text-base text-default-200 font-medium px-5">
                    At Video Podcast Creators, we're a collective of creative
                    visionaries who believe in the art of visual storytelling.
                    Our mission is to captivate, educate, and inspire audiences
                    worldwide
                  </p>
                  <div class="backdrop-blur-2xl bg-white/10 rounded-md max-w-xl mx-auto">
                    <form class="w-full flex items-center justify-between mt-7">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="w-full p-4 border-0 focus:outline-none focus:ring-0 text-sm text-white placeholder:text-white bg-transparent"
                        placeholder="Enter Your Email"
                        autocomplete="off"
                      />
                      <button class="py-2 px-6 me-2 border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500">
                        <div class="flex items-center justify-center gap-1">
                          <span>Submit</span>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </button>
                    </form>
                  </div>
                  <div class="flex flex-wrap items-center justify-center gap-6 mt-10">
                    <a
                      href="#"
                      class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                    >
                      Get start free
                      <i data-lucide="move-right">
                        <FaArrowRightLong />
                      </i>
                    </a>

                    <a
                      href="#"
                      class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                    >
                      More Tools
                      <i data-lucide="move-right">
                        <FaArrowRightLong />
                      </i>
                    </a>
                  </div>
                  <p class="text-sm font-medium text-default-400 mt-5">
                    Get 75 mins of upload for free every month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
