import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../Components";
import { EditProfileOne, EditProfileTwo } from "../EditProfilepage";

const editProfile = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <EditProfileOne />
      <EditProfileTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default editProfile;
