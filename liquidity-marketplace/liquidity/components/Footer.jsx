import React from "react";
import {
  TiSocialPinterestCircular,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
} from "react-icons/ti";

import { FooterICON } from "./index";

const Footer = () => {
  const social = [
    {
      link: "#",
      name: "FaceBook",
      icon: <TiSocialFacebook />,
    },
    {
      link: "#",
      name: "Twitter",
      icon: <TiSocialTwitter />,
    },
    {
      link: "#",
      name: "YouTube",
      icon: <TiSocialYoutube />,
    },
    {
      link: "#",
      name: "Pintrest",
      icon: <TiSocialPinterestCircular />,
    },
    {
      link: "#",
      name: "Instragram",
      icon: <TiSocialInstagram />,
    },
  ];
  return (
    <footer id="site-footer" class="footer">
      <canvas id="can"></canvas>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <div class="widget w-info">
              <a href="index.html" class="site-logo">
                <img src="img/logo-primary.png" alt="Woox" />
                <FooterICON />
              </a>
              <p>
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram, anteposuerit litterarum formas humanitatis. Vitae purus
                faucibus ornare suspendisse sed nisi lacus sed viverra vulputate
                sapien nec sagittis aliquam bibendum.
              </p>
            </div>

            <div class="widget w-contacts">
              <ul class="socials socials--white">
                {social.map((social, index) => (
                  <li key={index} class="social-item">
                    <a href={social.link} className=" woox-icon">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
              <span>© All right reserved 2018.</span>
              <span>
                <a href="index.html">The Woox</a> - ICO and Cryptocurrency Web3
                StartUp
              </span>

              <div class="logo-design">
                <img src="img/logo-fire.png" alt="ThemeFire" />
                <div class="design-wrap">
                  <div class="sup-title">designed by</div>
                  <a href="https://theblockchaincoders.com" class="logo-title">
                    @theblockchaincoders
                  </a>
                </div>
              </div>

              <div class="logo-design logo-design-crumina">
                <img src="img/crumina-logo.png" alt="Crumina" />
                <div class="design-wrap">
                  <div class="sup-title">developed by</div>
                  <a href="https://theblockchaincoders.com" class="logo-title">
                    The Blockchain Coders
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a class="back-to-top" href="#">
        <svg class="woox-icon icon-top-arrow">
          <use xlinkHref="#icon-top-arrow"></use>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
