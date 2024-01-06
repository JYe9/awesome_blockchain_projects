import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { UpcomingOne, UpcomingTwo } from "../UpcomingPage";

const upcoming = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <UpcomingOne />
      <UpcomingTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default upcoming;
