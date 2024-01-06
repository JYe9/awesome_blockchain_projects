import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <header id="navbar-sticky" class="navbar">
      <div class="container">
        <nav>
          <a href="/" class="logo">
            <img src="assets/images/logo.png" class="h-10" alt="WebAi Logo" />
          </a>

          <div class="lg:hidden flex items-center ms-auto px-2.5">
            <button
              class="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5"
              type="button"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <i data-lucide="menu" class=" stroke-white">
                <CgMenuRight />
              </i>
            </button>
          </div>

          <div
            id="mobileMenu"
            class="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
          >
            <ul id="navbar-navlist" class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#features">
                  Features
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#generator">
                  Generator
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#price">
                  Price
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#faq">
                  Faq
                </a>
              </li>
            </ul>

            <div class="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none">
              <a
                href="#"
                class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-3"
              >
                <i data-lucide="arrow-big-down-dash">
                  <MdOutlineFileDownload />
                </i>
                Download
              </a>
            </div>
          </div>

          <div class="hidden lg:flex items-center">
            <a
              href="register"
              class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
            >
              <i data-lucide="arrow-big-down-dash">
                <MdOutlineFileDownload />
              </i>
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
