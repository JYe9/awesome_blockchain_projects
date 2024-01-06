import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { ForgetFour, ForgetOne, ForgetThree, ForgetTwo } from "../ForgetPage";

const forget = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <ForgetOne />
      <ForgetTwo />
      <ForgetThree />
      <ForgetFour />
      <Footer />
      <Copyright />
    </div>
  );
};

export default forget;
