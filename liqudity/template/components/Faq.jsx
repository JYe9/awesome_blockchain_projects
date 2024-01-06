import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  return (
    <section id="faq" class="py-14">
      <div class="container">
        <div class="flex items-end justify-between mb-10">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-medium capitalize text-white mb-4">
              Any questions
            </h2>
            <p class="text-sm text-default-200 font-medium">
              Start working with Tailwindcss It allows you to compose complex
              designs <br />
              by combining and customizing utility classes..
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
          <div class="hs-accordion-group space-y-4">
            <div
              class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
              id="faq-2"
            >
              <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                aria-controls="faq-2"
              >
                <h5 class="text-base font-semibold flex">
                  <i
                    data-lucide="help-circle"
                    class="h-5 w-5 stroke-white me-3"
                  >
                    <GrCircleQuestion />
                  </i>
                  will you support my language?
                </h5>
                <i
                  data-lucide="chevron-up"
                  class=" transition-all duration-500 hs-accordion-active:-rotate-180"
                >
                  <IoIosArrowDown />
                </i>
              </button>
              <div
                id="faq-2"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-2"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-default-300 text-sm font-medium mb-2">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
              id="faq-3"
            >
              <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                aria-controls="faq-3"
              >
                <h5 class="text-base font-semibold flex">
                  <i
                    data-lucide="help-circle"
                    class="h-5 w-5 stroke-white me-3"
                  >
                    {" "}
                    <GrCircleQuestion />
                  </i>
                  Do you also provide subtitles?
                </h5>
                <i
                  data-lucide="chevron-up"
                  class=" transition-all duration-500 hs-accordion-active:-rotate-180"
                >
                  <IoIosArrowDown />
                </i>
              </button>
              <div
                id="faq-3"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-3"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-default-300 text-sm font-medium mb-2">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden active"
              id="faq-1"
            >
              <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                aria-controls="faq-accordion-1"
              >
                <h5 class="text-base font-semibold flex">
                  <i
                    data-lucide="help-circle"
                    class="h-5 w-5 stroke-white me-3"
                  >
                    {" "}
                    <GrCircleQuestion />
                  </i>
                  How do I get started?
                </h5>
                <i
                  data-lucide="chevron-up"
                  class=" transition-all duration-500 hs-accordion-active:-rotate-180"
                >
                  <IoIosArrowDown />
                </i>
              </button>
              <div
                id="faq-accordion-1"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-1"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-default-300 text-sm font-medium mb-2">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="hs-accordion-group space-y-4">
            <div
              class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
              id="faq-2"
            >
              <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                aria-controls="faq-2"
              >
                <h5 class="text-base font-semibold flex">
                  <i
                    data-lucide="help-circle"
                    class="h-5 w-5 stroke-white me-3"
                  >
                    {" "}
                    <GrCircleQuestion />
                  </i>
                  Do you have any samples?
                </h5>
                <i
                  data-lucide="chevron-up"
                  class="transition-all duration-500 hs-accordion-active:-rotate-180"
                >
                  <IoIosArrowDown />
                </i>
              </button>
              <div
                id="faq-2"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-2"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-default-300 text-sm font-medium mb-2">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
              id="faq-3"
            >
              <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                aria-controls="faq-3"
              >
                <h5 class="text-base font-semibold flex">
                  <i
                    data-lucide="help-circle"
                    class="h-5 w-5 stroke-white me-3"
                  >
                    {" "}
                    <GrCircleQuestion />
                  </i>
                  Can I get custom templates?
                </h5>
                <i
                  data-lucide="chevron-up"
                  class=" transition-all duration-500 hs-accordion-active:-rotate-180"
                >
                  <IoIosArrowDown />
                </i>
              </button>
              <div
                id="faq-3"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-3"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-default-300 text-sm font-medium mb-2">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos
                  </p>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden active"
              id="faq-1"
            >
              <button
                class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                aria-controls="faq-accordion-1"
              >
                <h5 class="text-base font-semibold flex">
                  <i
                    data-lucide="help-circle"
                    class="h-5 w-5 stroke-white me-3"
                  >
                    {" "}
                    <GrCircleQuestion />
                  </i>
                  What types of videos can i upload?
                </h5>
                <i
                  data-lucide="chevron-up"
                  class=" transition-all duration-500 hs-accordion-active:-rotate-180"
                >
                  {" "}
                  <IoIosArrowDown />
                </i>
              </button>
              <div
                id="faq-accordion-1"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-1"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-default-300 text-sm font-medium mb-2">
                    You can upload any files from your computer or use Youtube
                    links. Keep in mind that our content repurposing works best
                    with longer videos
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

export default Faq;
