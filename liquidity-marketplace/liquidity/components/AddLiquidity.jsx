import React, { useState, useEffect } from "react";

//INTERNAL IMPORT

import { Input } from "./index";

const AddLiquidity = ({ setOpenAllLiquidity, CREATE_LIQUIDITY }) => {
  const [poolHistory, setPoolHistory] = useState([]);
  const [selectedPool, setSelectedPool] = useState();
  const [liqudityAmount, setLiqudityAmount] = useState();
  const [approveAmount, setApproveAmount] = useState();

  useEffect(() => {
    const pools = JSON.parse(localStorage.getItem("poolHistory"));
    setPoolHistory(pools);
  }, []);

  return (
    <section>
      <div class="container">
        <div class="row pt80">
          <div class="new_addpool mb30">
            <div class="register-form form--dark">
              <header class="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <h2 class="heading-title">Add Liquidity</h2> &nbsp;&nbsp;&nbsp;
                <span onClick={() => setOpenAllLiquidity(false)}>X</span>
              </header>

              <div class="form-group label-floating is-empty">
                <select
                  onChange={(e) => {
                    const selected = poolHistory?.find(
                      (x, index) => index + 1 == e.target.value
                    );
                    setSelectedPool(selected);
                  }}
                  class="form-control input--squared input--dark"
                >
                  <option>Select Items</option>
                  {poolHistory.map((pool, index) => (
                    <option key={index + 1} value={index + 1}>
                      {pool.token_A.name} ♾️ {pool.token_B.symbol} Fee:{" "}
                      {pool.fee}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                placeholder={"liqudity amount"}
                handleClick={(e) => setLiqudityAmount(e.target.value)}
              />
              <Input
                placeholder={"approve amount "}
                handleClick={(e) => setApproveAmount(e.target.value)}
              />

              <button
                onClick={() =>
                  CREATE_LIQUIDITY(selectedPool, liqudityAmount, approveAmount)
                }
                class="btn btn--large btn--green-light btn--with-icon btn--icon-right full-width"
              >
                Create Liquidity
                <svg class="woox-icon icon-arrow-right">
                  <use xlinkHref="#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddLiquidity;
