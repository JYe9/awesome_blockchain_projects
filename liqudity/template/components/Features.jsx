import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOndemandVideo } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" class="py-14">
      <div class="container">
        <div class="flex items-end justify-between mb-10">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-medium capitalize text-white mb-4">
              We're here to support you every step way
            </h2>
            <p class="text-sm text-default-200 font-medium">
              Start working with Tailwindcss It allows you to compose complex
              designs <br />
              by combining and customizing utility classes..
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-px overflow-hidden rounded-3xl">
          <div class="bg-default-950/40 backdrop-blur-3xl">
            <div class="sm:p-10 p-8">
              <div class="inline-flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-xl mb-10">
                <i data-lucide="youtube">
                  <MdOndemandVideo />
                </i>
              </div>
              <h2 class="text-2xl text-white font-medium mb-4">
                Video podcaster & creators
              </h2>
              <p class="text-base text-default-200 mb-6">
                We foster a sense of community and engagement, encouraging
                viewers to be a part of the conversation and share their
                thoughts
              </p>
              <a
                href="#"
                class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
              >
                More Tools{" "}
                <i data-lucide="move-right">
                  <FaArrowRightLong />
                </i>
              </a>
            </div>
          </div>

          <div class="bg-default-950/40 backdrop-blur-3xl">
            <div class="sm:p-10 p-8">
              <div class="inline-flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-xl mb-10">
                <i data-lucide="users-2">
                  <FaUserFriends />
                </i>
              </div>
              <h2 class="text-2xl text-white font-medium mb-4">
                For Content Teams
              </h2>
              <p class="text-base text-default-200 mb-6">
                Our analytics tools provide actionable insights, enabling your
                team to create content that drives engagement and conversions
              </p>
              <a
                href="#"
                class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
              >
                More Tools{" "}
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

export default Features;
