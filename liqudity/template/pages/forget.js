import React from "react";
//INTERNAL IMPORT
import { Action } from "../components/index";

const forget = () => {
  return (
    <div class="bg-slate-900 relative h-full">
      <section class="flex items-center py-6 px-0 lg:p-10 w-full lg:h-screen">
        <div class="container">
          <div class="backdrop-blur-2xl bg-default-950/40 rounded-2xl overflow-hidden max-w-5xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-10">
              <div class="hidden lg:block ps-4 py-4">
                <div class="relative rounded-xl overflow-hidden h-full w-full">
                  <img
                    src="assets/images/ai/auth-img.jpg"
                    alt=""
                    class="w-full h-full transform -scale-x-100"
                  />
                  <div class="absolute inset-0 bg-default-950/40">
                    <div class="flex items-end justify-center h-full">
                      <div class="p-6 text-start">
                        <h5 class="text-xl font-bold text-white mb-3">
                          Is the best way, <br />
                          to build your marketing strategy!
                        </h5>
                        <p class="text-base font-medium text-default-400">
                          Try all paid functions for free. just register and
                          create your first widget, it simple and fast.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col h-full p-10 lg:ps-0">
                <div class="pb-10">
                  <a href="index.html" class="flex">
                    <img
                      src="assets/images/logo.png"
                      alt="dark logo"
                      class="h-10"
                    />
                  </a>
                </div>
                <div class="my-auto">
                  <h4 class="text-2xl font-bold text-white mb-3">
                    Forgot Password?
                  </h4>
                  <p class="text-default-300 mb-8 max-w-sm">
                    Enter your email address and password to access account.
                  </p>

                  <form action="#" class="text-start">
                    <div class="mb-4">
                      <label
                        for="emailaddress"
                        class="block text-base/normal font-semibold text-default-200 mb-2"
                      >
                        Email address
                      </label>
                      <input
                        class="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                        type="email"
                        id="emailaddress"
                        required=""
                        placeholder="Enter your email"
                      />
                    </div>

                    <div class="text-center">
                      <button
                        class="w-full inline-flex items-center justify-center px-6 py-2 backdrop-blur-2xl bg-primary-600/90 text-white rounded-lg transition-all duration-500 group hover:bg-primary-600 mt-5"
                        type="submit"
                      >
                        <span class="fw-bold">Log In</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full text-center mt-5">
            <p class="text-default-300 leading-6 text-base font-medium">
              Back To
              <a href="auth-login.html" class="text-primary font-semibold ms-1">
                Log In
              </a>
            </p>
          </div>
        </div>
      </section>
      <Action />
    </div>
  );
};

export default forget;