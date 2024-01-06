import React from "react";
import { MdShoppingCart, MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const Generator = () => {
  return (
    <section id="generator" class="py-14">
      <div class="container">
        <div class="flex items-end justify-between mb-10">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-medium capitalize text-white mb-4">
              Choose Social Media Post Generator
            </h2>
            <p class="text-sm text-default-200 font-medium">
              Start working with Tailwindcss It allows you to compose complex
              designs <br />
              by combining and customizing utility classes..
            </p>
          </div>
        </div>

        <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div class="group p-8 rounded-xl bg-default-950/40 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40">
            <div class="h-14 w-14 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-white/20 group-hover:text-white">
              <i data-lucide="line-chart" class="">
                <MdOutlineAdminPanelSettings />
              </i>
            </div>
            <h3 class="text-xl font-medium text-default-200 mt-8">
              Grow on multiple platforms
            </h3>
            <p class="text-base font-normal text-default-300 mt-4">
              By utilizing the artificial intelligence AI technology that we
              provide, you can quickly grow on various platforms without having
              to invest extra time and effort.
            </p>
          </div>

          <div class="group p-8 rounded-xl bg-default-950/40 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40">
            <div class="h-14 w-14 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-white/20 group-hover:text-white">
              <i data-lucide="smartphone">
                <FaMobileAlt />
              </i>
            </div>
            <h3 class="text-xl font-medium text-default-200 mt-8">
              Engage viewers everywhere
            </h3>
            <p class="text-base font-normal text-default-300 mt-4">
              By adopting advanced AI technology. you can expand the reach of
              your audience and reach viewers on various platforms in an
              effective and efficient way.
            </p>
          </div>

          <div class="group p-8 rounded-xl bg-default-950/40 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40">
            <div class="h-14 w-14 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-white/20 group-hover:text-white">
              <i data-lucide="shopping-cart" class="">
                <MdShoppingCart />
              </i>
            </div>
            <h3 class="text-xl font-medium text-default-200 mt-8">
              Spend more time creating
            </h3>
            <p class="text-base font-normal text-default-300 mt-4">
              With the artificial intelligence AI technology that we provide,
              you can produce spectacular video edits in a very short time
              effective and efficient way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generator;
