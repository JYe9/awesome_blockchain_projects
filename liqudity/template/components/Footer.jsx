import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer class="bg-default-950/40">
      <div class="container">
        <div class="grid lg:grid-cols-9 grid-cols-2 gap-10 lg:gap-16 py-20">
          <div class="lg:col-span-3 sm:col-span-1 col-span-2">
            <img src="assets/images/logo.png" class="h-10" alt="" />

            <div class="mt-7">
              <h6 class="text-base text-white mb-4">Follow US :</h6>
              <ul class="flex flex-wrap items-center gap-1">
                <li>
                  <a class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary">
                    <i
                      data-lucide="facebook"
                      class=" text-default-300 group-hover:text-white"
                    >
                      <TiSocialFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary">
                    <i
                      data-lucide="instagram"
                      class=" text-default-300 group-hover:text-white"
                    >
                      <TiSocialLinkedin />
                    </i>
                  </a>
                </li>
                <li>
                  <a class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary">
                    <i
                      data-lucide="twitter"
                      class=" text-default-300 group-hover:text-white"
                    >
                      <TiSocialTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  <a class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary">
                    <i
                      data-lucide="linkedin"
                      class=" text-default-300 group-hover:text-white"
                    >
                      <TiSocialYoutube />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="lg:col-span-2 sm:col-span-1 col-span-2">
            <ul class="flex flex-col gap-3">
              <h5 class="xl:text-xl lg:text-lg font-medium text-white mb-2">
                Product
              </h5>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Get an Essay
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2 sm:col-span-1 col-span-2">
            <ul class="flex flex-col gap-3">
              <h5 class="xl:text-xl lg:text-lg font-medium text-white mb-2">
                Support
              </h5>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Walkthrough
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2 sm:col-span-1 col-span-2">
            <ul class="flex flex-col gap-3">
              <h5 class="xl:text-xl lg:text-lg font-medium text-white mb-2">
                Legal
              </h5>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Refund policy
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="text-base font-normal text-default-200 hover:text-white transition-all"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 py-6">
        <div class="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
          <p class="text-base font-medium text-default-400">
            2024© WebAi -
            <a href="#">
              Design & Crafted
              <i
                data-lucide="heart"
                class="inline h-4 w-4 text-red-500 fill-red-500"
              ></i>
              by @theblockchaincoders
            </a>
          </p>
          <p class="text-base font-medium text-default-400">
            <a href="#">Terms Conditions & Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
