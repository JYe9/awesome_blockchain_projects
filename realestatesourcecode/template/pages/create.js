import React from "react";

//INTERNAL IMPORT
import { CreateOne, CreateThree, CreateTwo } from "../CreatePage";
import { Header, Footer, Copyright } from "../Components";

const create = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <CreateOne />
      <CreateTwo />
      <CreateThree />
      <Footer />
      <Copyright />
    </div>
  );
};

export default create;
