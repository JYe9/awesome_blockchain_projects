import React from "react";
import Image from "next/image";
//INTERNAL IMPORT
import { YouTube, Twitter, Instagram, GitHub, FormSVG } from "../SVG";
import Style from "./Profile.module.css";
import images from "../Image/client/index";
const Profile = ({ setOpenProfile, userBlance, address }) => {
  return (
    <>
      <div class={Style.card}>
        <div class={Style.img}>
          <Image
            className="avatar_img"
            src={images.client1}
            width={80}
            height={80}
            onClick={() => setOpenProfile(true)}
          />
        </div>

        <span> {address.slice(0, 25)}</span>
        <p class={Style.info}>
          {userBlance} Welcome to NFTs IPFS Upload Our products help you
          securely distribute any type of media at scale—freeing you from
          restrictive platforms, middlemen, and algorithms that limit your
          creative agency.
        </p>
        <div class={Style.share}>
          <a href="">
            <GitHub />
          </a>
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <YouTube />
          </a>
        </div>
        <button onClick={() => setOpenProfile(false)}>Close</button>
      </div>
    </>
  );
};

export default Profile;
