import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

//INTERNAL IMPORT
import { shortenAddress } from "../utils/index";

const Token = ({
  LOAD_TOKEN,
  setOpenToken,
  notifyError,
  setToken_1,
  setToken_2,
  token_1,
  token_2,
}) => {
  //STATE VARIABLE
  const [serachToken, setSerachToken] = useState();
  const [tokenHistory, setTokenHistory] = useState([]);
  const [displyToken, setDisplyToken] = useState();

  useEffect(() => {
    const loadToken = async () => {
      const token = await LOAD_TOKEN(serachToken);
      if (token == undefined) {
        notifyError("No token or address");
      } else {
        setDisplyToken(token);
        console.log(token);
      }
    };
    loadToken();
  }, [serachToken]);

  const selectToken = () => {
    if (token_1 == undefined) {
      setToken_1(displyToken);
      setOpenToken(false);
    } else {
      setToken_2(displyToken);
      setOpenToken(false);
    }
  };

  return (
    <div class="banner ">
      <div class="hero-area ">
        <div class="container ">
          <div class="row align-items-center justify-content-between ">
            <div class="col-xl-4 col-lg-6 wow new_width">
              <div class="exchange">
                <h5 class="ex-head">Cryptocurrency Token</h5>

                <div class="exchange-box">
                  <div class="selector">
                    <p class="text">Search token address</p>
                    <div class="coin">
                      <span>{displyToken?.symbol}</span>
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <input
                        onChange={(e) => setSerachToken(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder={displyToken?.address || "search"}
                      />
                    </div>
                  </div>
                </div>
                {displyToken ? (
                  <a onClick={() => selectToken()} class="button button-1">
                    {shortenAddress(displyToken?.address)} {displyToken?.symbol}
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
