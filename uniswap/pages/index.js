import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import Modal from "../Components/Modal";

const index = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const active = localStorage.getItem("active");
    const activeState = JSON.parse(active);

    if (activeState == false) {
      console.log(activeState);
      setActive(false);
    }
  }, []);

  return (
    <div>
      <iframe
        src="https://app.uniswap.org/#/swap?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
        height="660px"
        width="100%"
        className="uniswap"
      />

      {active && (
        <div className="global">
          <div className="global_inner">
            <Modal />
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
