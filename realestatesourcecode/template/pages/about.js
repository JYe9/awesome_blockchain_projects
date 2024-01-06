import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { Banner, Action, Blog, Quote, Statistick } from "../AboutPage";

const about = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <Banner />
      <Action />
      <Blog />
      <Quote />
      <Statistick />
      <Footer />
      <Copyright />
    </div>
  );
};

export default about;
