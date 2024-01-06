import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Technolog = () => {
  return (
    <section class="py-14">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <span class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/20">
              AI technolog
            </span>
            <h2 class="text-3xl/snug font-medium capitalize text-white mt-4">
              Create amazing content with AI technology.
            </h2>
            <p class="text-base font-medium text-default-200 mt-5">
              Start working with Tailwindcss It allows you to compose complex
              designs <br />
              by combining and customizing utility classes..
            </p>
            <div class="flex flex-wrap items-center gap-6 mt-10">
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
          </div>

          <div>
            <img
              src="assets/images/ai/video-2.svg"
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 items-center mt-14">
          <div class="2xl:-ms-16">
            <img
              src="assets/images/ai/video-1.svg"
              class="h-full w-full"
              alt=""
            />
          </div>

          <div>
            <span class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/20">
              Content generate
            </span>
            <h2 class="text-3xl/snug font-medium capitalize text-white mt-4">
              Content you can write & generate with our AI
            </h2>
            <p class="text-base font-medium text-default-200 mt-5">
              Start working with Tailwindcss It allows you to compose complex
              designs <br />
              by combining and customizing utility classes..
            </p>
            <div class="flex flex-wrap items-center gap-6 mt-10">
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
                More Tools{" "}
                <i data-lucide="move-right">
                  {" "}
                  <FaArrowRightLong />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technolog;
