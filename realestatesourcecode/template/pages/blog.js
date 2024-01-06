import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { BlogOne, BlogTwo } from "../BlogPage";

const blog = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <BlogOne />
      <BlogTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default blog;
