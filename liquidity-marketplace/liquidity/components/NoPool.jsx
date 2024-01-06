import React from "react";

const NoPool = () => {
  return (
    <>
      <div class="new_center_img mt30">
        <img class="responsive-width-50" src="img/nopool.png" alt="phone" />
      </div>
      <button
        onClick={(e) => window.location.reload()}
        class="btn btn--large btn--green-light btn--with-icon btn--icon-right full-width"
      >
        Sorry, No Pool - Get Back
        <svg class="woox-icon icon-arrow-right">
          <use xlinkHref="#icon-arrow-right"></use>
        </svg>
      </button>
    </>
  );
};

export default NoPool;
