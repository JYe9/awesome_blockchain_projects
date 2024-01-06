import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Action = () => {
  return (
    <section class="py-14">
      <div class="container">
        <div class="p-6 rounded-xl bg-default-950/40">
          <div class="flex flex-wrap items-center gap-6">
            <div class="flex-shrink">
              <div class="flex -space-x-2">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                  src="assets/images/avatars/img-1.png"
                  alt="Image Description"
                />
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                  src="assets/images/avatars/img-2.png"
                  alt="Image Description"
                />
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                  src="assets/images/avatars/img-3.png"
                  alt="Image Description"
                />
                <button class="h-10 w-10 font-medium text-primarys rounded-full bg-white">
                  80+
                </button>
              </div>
            </div>

            <div class="flex-grow">
              <h3 class="text-lg font-medium text-default-200">
                Join our AI experts communiy
              </h3>
              <p class="w-3/4 text-base font-medium text-default-300 mt-5">
                Meet and learn from 80+ creators & companies who share how thay
                use AI to create better content at lightning speed.
              </p>
            </div>

            <div class="flex-shrink">
              <a
                href="#"
                class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
              >
                Join
                <i data-lucide="move-right">
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

export default Action;
