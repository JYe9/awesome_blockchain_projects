import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { LoginOne, LoginTwo } from "../LoginPage";

const login = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <LoginOne />
      <LoginTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default login;
