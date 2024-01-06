import React from "react";
import { TiTick } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";

const Price = () => {
  return (
    <section id="price" class="py-14">
      <div class="container">
        <div class="flex items-end justify-between mb-10">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-medium capitalize text-white mb-4">
              We've got a plan that's perfect for you
            </h2>
            <p class="text-sm text-default-200 font-medium">
              Start working with Tailwindcss It allows you to compose complex
              designs <br />
              by combining and customizing utility classes..
            </p>
            <div class="flex items-center justify-center gap-4 mt-6">
              <span class="text-base font-medium text-default-200">
                Monthly
              </span>
              <label
                for="pricing-input"
                class="relative inline-flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="pricing-input"
                  value=""
                  class="sr-only peer"
                />
                <span class="w-11 h-4 bg-default-700 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-default-950 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[2px] after:border-default-950 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:ring-2 after:ring-offset-2 after:ring-offset-default-950 after:ring-primary after:bg-primary"></span>
              </label>
              <span class="text-base font-medium text-default-200">Yearly</span>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <div class="bg-slate-950/40 rounded-xl hover:-translate-y-2 transition-all duration-500">
              <div class="border border-white/10 rounded-xl">
                <div class="p-6">
                  <h5 class="text-base font-medium text-primary">Basic plan</h5>
                  <p class="relative text-5xl font-normal tracking-tight text-white mt-5">
                    $12
                    <sub class="text-lg font-normal text-default-200">/mo</sub>
                  </p>
                  <p class="text-default-300 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    class="flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 mt-6 rounded-lg hover:bg-primary-hover transition-all duration-300"
                  >
                    Get started{" "}
                    <i data-lucide="move-right">
                      {" "}
                      <FaArrowRightLong />
                    </i>
                  </a>
                  <hr class="my-5 border-dashed border-white/10" />
                  <ul role="list" class="mt-3 text-sm text-default-700">
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block me-1 text-primary"
                      >
                        <TiTick />
                      </i>
                      <span class="text-default-50">
                        All analytics features
                      </span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">
                        Up to 25 000 tracked visits
                      </span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Normal support</span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Mobile app</span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Up to 3 team members</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-slate-950/40 rounded-xl hover:-translate-y-2 transition-all duration-500">
              <div class="border border-white/10 rounded-xl">
                <div class="p-6">
                  <h5 class="text-base font-medium text-primary">Startup</h5>
                  <p class="relative text-5xl font-normal tracking-tight text-white mt-5">
                    $35
                    <sub class="text-lg font-normal text-default-200">/mo</sub>
                  </p>
                  <p class="text-default-300 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    class="flex items-center justify-center gap-2 border border-primary bg-primary text-white py-2 px-6 mt-6 rounded-lg hover:bg-primary-hover transition-all duration-300"
                  >
                    Get started{" "}
                    <i data-lucide="move-right">
                      {" "}
                      <FaArrowRightLong />
                    </i>
                  </a>
                  <hr class="my-5 border-dashed border-white/10" />
                  <ul role="list" class="mt-3 text-sm text-default-700">
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">
                        Everything on Basic plan
                      </span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">
                        Up to 1000 tracked visits
                      </span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Premium sipport</span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Mobile app</span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Up to 10 team members</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-slate-950/40 rounded-xl hover:-translate-y-2 transition-all duration-500">
              <div class="border border-white/10 rounded-xl">
                <div class="p-6">
                  <h5 class="text-base font-medium text-primary">Enterprise</h5>
                  <p class="relative text-5xl font-normal tracking-tight text-white mt-5">
                    $60
                    <sub class="text-lg font-normal text-default-200">/mo</sub>
                  </p>
                  <p class="text-default-300 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    class="flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 mt-6 rounded-lg hover:bg-primary-hover transition-all duration-300"
                  >
                    Get started{" "}
                    <i data-lucide="move-right" class="">
                      <FaArrowRightLong />
                    </i>
                  </a>
                  <hr class="my-5 border-dashed border-white/10" />
                  <ul role="list" class="mt-3 text-sm text-default-700">
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">
                        Everything on Growth plan
                      </span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">
                        Up to 5000 tracked visits
                      </span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Dsdicated support</span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Mobile app</span>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                      <i
                        data-lucide="check"
                        class="inline-block  me-1 text-primary"
                      >
                        {" "}
                        <TiTick />
                      </i>
                      <span class="text-default-50">Up to 50 team members</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
