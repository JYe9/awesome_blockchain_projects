import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import { PoolInput, SuccessPool, NoPool } from "./index";

const AddPool = ({
  setOpenAddPool,
  notifyError,
  notifySuccess,
  LOAD_TOKEN,
  GET_POOL_ADDRESS,
}) => {
  const [poolAddress, setpoolAddress] = useState();
  const [zeroAdd, setZeroAdd] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  return (
    <section>
      <div class="container">
        <div class="row pt80">
          <div class="new_addpool mb30">
            <div class="register-form form--dark">
              <header class="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <h2 class="heading-title">Add Pool</h2> &nbsp;&nbsp;&nbsp;
                <span onClick={() => setOpenAddPool(false)}>X</span>
              </header>

              {poolAddress == zeroAdd ? (
                <NoPool />
              ) : poolAddress ? (
                <SuccessPool poolAddress={poolAddress} />
              ) : (
                <PoolInput
                  notifyError={notifyError}
                  notifySuccess={notifySuccess}
                  LOAD_TOKEN={LOAD_TOKEN}
                  GET_POOL_ADDRESS={GET_POOL_ADDRESS}
                  setpoolAddress={setpoolAddress}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPool;
