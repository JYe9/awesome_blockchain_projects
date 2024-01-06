import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { ExplorFour, ExplorOne, ExplorThree, ExplorTwo } from "../ExplorePage";

const explor = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <ExplorOne />
      <ExplorTwo />
      <ExplorThree />
      <ExplorFour />
      <Footer />
      <Copyright />
    </div>
  );
};

export default explor;
