import React from "react";

//INTERNAL IMPORT
import { Activity } from "../ActivityPage";
import { Header, Footer, Copyright } from "../Components";

const active = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <Activity />
      <Footer />
      <Copyright />
    </div>
  );
};

export default active;
