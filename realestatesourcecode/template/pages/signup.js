import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { SignUpOne, SignUpTwo } from "../SignUpPage";

const signup = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <SignUpOne />
      <SignUpTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default signup;
