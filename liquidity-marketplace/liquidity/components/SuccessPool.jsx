import React from "react";

//INTERNAL IMPORT
import { Input } from "./index";

const SuccessPool = ({ poolAddress }) => {
  return (
    <>
      <Input value={`${poolAddress}`} />
      <button
        onClick={(e) => navigator.clipboard.writeText(poolAddress)}
        class="btn btn--large btn--green-light btn--with-icon btn--icon-right full-width"
      >
        Copy Pool Address
        <svg class="woox-icon icon-arrow-right">
          <use xlinkHref="#icon-arrow-right"></use>
        </svg>
      </button>
    </>
  );
};

export default SuccessPool;
