import React, { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons";

//INTERNAL IMPORT
import { Footer } from "../index";

const TradeTokens = () => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);
  const [tokens, setTokens] = useState([]);
  const [copyTokens, setCopyTokens] = useState([]);
  const [tradeToken, setTradeToken] = useState({});
  const [active, setActive] = useState();

  useEffect(() => {
    const tokenLists = JSON.parse(localStorage.getItem("setTokens"));
    const tokenPair = JSON.parse(localStorage.getItem("tokenPair"));

    setTradeToken(tokenPair);
    setTokens(tokenLists);
    setCopyTokens(tokenLists);

    console.log(tokenLists);
  }, []);

  const onHandleSearch = (value) => {
    const filterTokens = tokens?.filter(({ network }) =>
      network.toLowerCase().includes(value.toLowerCase())
    );

    if (filterTokens?.length === 0) {
      setTokens(copyTokens);
    } else {
      setTokens(filterTokens);
    }
  };

  const onClearSearch = () => {
    if (tokens?.length && copyTokens?.length) {
      setTokens(copyTokens);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  const selectTokenPair = () => {
    localStorage.setItem("tokenPair", JSON.stringify(tradeToken));
  };

  return (
    <div className="techwave_fn_content">
      <div className="techwave_fn_page">
        <div className="techwave_fn_community_page">
          <div className="fn__title_holder">
            <div className="container">
              <h1 className="title">Tokens</h1>
            </div>
          </div>

          <div className="techwave_fn_feed">
            <div className="container">
              <div className="feed__filter">
                <div className="filter__search">
                  <input
                    type="text"
                    placeholder="Search token.."
                    onChange={(e) => setSearchItem(e.target.value)}
                    value={searchItem}
                  />
                  <a className="techwave_fn_button">
                    <span>Search</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="techwave_fn_pricing">
              <div className="container">
                <div className="pricing__tabs">
                  <div className="pricing__tab active">
                    {/* MOBILE */}
                    <div className="fn__mobile_pricing">
                      <div className="pricing__item">
                        <div className="pricing__item_holder">
                          <div className="pricing__item__heading">
                            <h2 className="title">Tokens pair lists</h2>
                          </div>

                          <div className="pricing__item_list">
                            {tokens?.map((token, index) => (
                              <div
                                className="pricing__item_list_item"
                                key={index}
                                onClick={
                                  (() => setTradeToken(token),
                                  selectTokenPair())
                                }
                              >
                                <h4 className="title">{token.network}</h4>
                                <p className="desc">{token.fee}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* DESKTOP */}
                    <div className="pricing__content">
                      <div className="pricing__heading">
                        <div className="item">
                          <span className="title">Tokens pair lists</span>
                        </div>
                        <div className="item wide"></div>
                      </div>

                      <div className="pricing__fields">
                        {tokens?.map((token, index) => (
                          <div
                            key={index}
                            onClick={() => (
                              setTradeToken(token),
                              selectTokenPair(),
                              setActive(index + 1)
                            )}
                            className={`item_row ${
                              active == index + 1 ? "pricing__heading" : ""
                            }`}
                          >
                            <div className="item_col">
                              <span className="heading_text">
                                {token.network}
                              </span>
                            </div>
                            <div className="item_col">
                              <span className="option_text">
                                {token.token1}
                              </span>
                            </div>
                            <div className="item_col">
                              <span className="option_text">
                                {token.token2}
                              </span>
                            </div>
                            <div className="item_col">
                              <span className="option_text">{token.fee}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TradeTokens;
