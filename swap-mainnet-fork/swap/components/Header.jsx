import React from "react";

//INTERNAL IMPORT
import { shortenAddress } from "../utils/index";

const Header = ({ address, connect }) => {
  return (
    <div class="mein-menu">
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="assets/img/logo.png" class="logo" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#howworks">
                  How it works
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  {" "}
                  Q&A
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Contact
                </a>
              </li>
              {address ? (
                <button className="new_button">
                  {" "}
                  {shortenAddress(address)}
                </button>
              ) : (
                <button onClick={() => connect()} className="new_button">
                  {" "}
                  connect
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
