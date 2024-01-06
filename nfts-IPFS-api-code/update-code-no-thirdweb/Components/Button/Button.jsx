import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({ disconnect, connect, address, file, setOpenProfil }) => {
  return (
    <>
      {address ? (
        <button onClick={() => setOpenProfil(true)} class={Style.button}>
          <span class={Style.button_content}>
            {" "}
            {file ? "Upload" : " Profile"}{" "}
          </span>
        </button>
      ) : (
        <button onClick={() => connect()} class={Style.button}>
          <span class={Style.button_content}>Connect </span>
        </button>
      )}
    </>
  );
};

export default Button;
