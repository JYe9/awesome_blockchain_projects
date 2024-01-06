import React from "react";

//INTERNAL IMPORT
import {
  Header,
  Banner,
  Live,
  Service,
  Product,
  TopSeller,
  Collection,
  Footer,
  Copyright,
} from "../Components";

const index = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <Banner />

      <Live />
      <Service />
      <Product />
      <TopSeller />

      <Collection />

      <Footer />
      <Copyright />
    </div>
  );
};

export default index;
