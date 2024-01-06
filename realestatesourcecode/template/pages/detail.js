import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import {
  DetailEight,
  DetailFive,
  DetailFour,
  DetailOne,
  DetailSeven,
  DetailSix,
  DetailThree,
  DetailTwo,
} from "../DetailPage";

const about = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <DetailOne />
      <DetailTwo />
      <DetailThree />
      <DetailFour />
      <DetailFive />
      <DetailSix />
      <DetailSeven />
      <DetailEight />
      <Footer />
      <Copyright />
    </div>
  );
};

export default about;
