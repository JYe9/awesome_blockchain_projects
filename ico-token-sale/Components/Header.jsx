import React from "react";
import { BiMenu } from "react-icons/bi";

const Header = ({ address, connectWallet }) => {
  const menuList = [
    {
      menu: "Home",
      link: "#",
    },
    {
      menu: "Service",
      link: "#service",
    },
    {
      menu: "About",
      link: "#about",
    },
    {
      menu: "Token",
      link: "#token",
    },

    {
      menu: "Team",
      link: "#team",
    },
    {
      menu: "Faq",
      link: "#faq",
    },
    {
      menu: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header class="header_wrap fixed-top">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg">
          <a
            class="navbar-brand page-scroll animation"
            href="#home_section"
            data-animation="fadeInDown"
            data-animation-delay="1s"
          >
            <img class="logo_light" src="assets/images/logo.png" alt="logo" />
            <img
              class="logo_dark"
              src="assets/images/logo_dark.png"
              alt="logo"
            />
          </a>
          <button
            class="navbar-toggler animation"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-animation="fadeInDown"
            data-animation-delay="1.1s"
          >
            <BiMenu />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              {menuList.map((menu, i) => (
                <li
                  key={i + 1}
                  class=" animation"
                  data-animation="fadeInDown"
                  data-animation-delay={`1.${i + 1}s`}
                >
                  <a class="nav-link" href={menu.link}>
                    {menu.menu}
                  </a>
                </li>
              ))}
            </ul>
            <ul class="navbar-nav nav_btn align-items-center">
              <li
                class="animation"
                data-animation="fadeInDown"
                data-animation-delay="2s"
              >
                {address ? (
                  <a class="btn btn-default btn-radius nav_item ">
                    <small className="new-color">
                      {" "}
                      {address.slice(0, 15)}...
                    </small>
                  </a>
                ) : (
                  <a
                    onClick={() => connectWallet()}
                    class="btn btn-default btn-radius nav_item "
                  >
                    <small className="new-color"> {"Connect"}</small>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
