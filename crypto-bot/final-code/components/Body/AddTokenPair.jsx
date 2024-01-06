import React, { useState } from "react";
import toast from "react-hot-toast";

import { Footer } from "../index";

const AddTokenPair = () => {
  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  const [token, setToken] = useState({
    token1: "",
    token2: "",
    tokenAddress1: "",
    tokenAddress2: "",
    network: "",
    fee: "",
    buyAmount: "",
    targetPrice: "",
    message: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };

  const storeToken = () => {
    const {
      token1,
      token2,
      tokenAddress1,
      tokenAddress2,
      network,
      fee,
      message,
    } = token;

    if (
      !token1 ||
      !token2 ||
      !tokenAddress1 ||
      !tokenAddress2 ||
      !network ||
      !fee ||
      !message
    )
      return notifyError("Provide all data");

    let tokenArray = [];

    const tokenLists = localStorage.getItem("setTokens");
    if (tokenLists) {
      tokenArray = JSON.parse(localStorage.getItem("setTokens"));
      tokenArray.push(token);
      localStorage.setItem("setTokens", JSON.stringify(tokenArray));
      notifySuccess("Token add Successfully");
    } else {
      tokenArray.push(token);
      localStorage.setItem("setTokens", JSON.stringify(tokenArray));
      notifySuccess("Token add Successfully");
    }
  };

  return (
    <div className="techwave_fn_content">
      <div className="techwave_fn_page">
        <div className="techwave_fn_contact_page">
          <div className="techwave_fn_pagetitle">
            <h2 className="title">Add Trading Tokens</h2>
          </div>

          <div className="contactpage">
            <div className="container small">
              <div className="fn_contact_form">
                <form className="contact_form">
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          type="text"
                          placeholder="Native Token Name 1"
                          onChange={(e) => handleFormFieldChange("token1", e)}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder="Native Token Address"
                          onChange={(e) =>
                            handleFormFieldChange("tokenAddress1", e)
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder=" Token Name 2"
                          onChange={(e) => handleFormFieldChange("token2", e)}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder="Token Address 2"
                          onChange={(e) =>
                            handleFormFieldChange("tokenAddress2", e)
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder="Fee%"
                          onChange={(e) => handleFormFieldChange("fee", e)}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder="Network Name"
                          onChange={(e) => handleFormFieldChange("network", e)}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder="Buy Amount"
                          onChange={(e) =>
                            handleFormFieldChange("buyAmount", e)
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder="Traget Price"
                          onChange={(e) =>
                            handleFormFieldChange("targetPrice", e)
                          }
                        />
                      </li>
                      <li>
                        <textarea
                          type="text"
                          placeholder="Message"
                          onChange={(e) => handleFormFieldChange("message", e)}
                        />
                      </li>
                      <li>
                        <div>
                          <a
                            onClick={() => storeToken()}
                            className="techwave_fn_button"
                          >
                            <span>Save Token</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="returnmessage"
                    data-success="Thanks for submitting the form"
                  ></div>
                </form>
              </div>

              <div className="fn__space__30"></div>
              <hr data-h="2" />
              <div className="fn__space__10"></div>
              <p>
                Kindly add your token which you want to use for automating
                tradinf
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddTokenPair;
