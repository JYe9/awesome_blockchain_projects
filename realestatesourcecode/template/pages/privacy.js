import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { PrivacyOne, PrivacyTwo } from "../PrivacyPage";

const privacy = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <PrivacyOne />
      <PrivacyTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default privacy;
