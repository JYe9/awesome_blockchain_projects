import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { RankingOne, RankingTwo } from "../RankingPage";

const ranking = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <RankingOne />
      <RankingTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default ranking;
