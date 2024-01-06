import React from "react";

//INTERNAL IMPORT
import { CreatorOne } from "../CreatorPage";
import { Header, Footer, Copyright } from "../Components";

const creator = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <CreatorOne />
      <Footer />
      <Copyright />
    </div>
  );
};

export default creator;
