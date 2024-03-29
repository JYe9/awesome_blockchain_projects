import React from "react";

//INTERNAL IMPORT
import { BlogDetailOne, BlogDetailTwo } from "../BlogDetail";
import { Header, Footer, Copyright } from "../Components";

const blogDetail = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <BlogDetailOne />
      <BlogDetailTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default blogDetail;
