import React, { useContext, useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

//INTERNAL IMPORT
import { Footer } from "../index";
import { CONTEXT } from "../../context/context";
const TopExchangeTokens = () => {
  const { topTokens } = useContext(CONTEXT);

  //STATE VARIABLE
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);
  const [tokens, setTokens] = useState(topTokens);
  const [copyTokens, setCopyTokens] = useState(topTokens);

  const onHandleSearch = (value) => {
    const filterTokens = tokens?.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
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

  return (
    <div className="techwave_fn_content">
      <div className="techwave_fn_page">
        <div className="techwave_fn_community_page">
          <div className="fn__title_holder">
            <div className="container">
              <h1 className="title">Top Tokens</h1>
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
                            <h2 className="title">Top 20 tokens</h2>
                          </div>

                          <div className="pricing__item_list">
                            {tokens?.map((token, index) => (
                              <div
                                className="pricing__item_list_item"
                                key={index}
                              >
                                <h4
                                  onClick={() =>
                                    navigator.clipboard.writeText(token.id)
                                  }
                                  className="title"
                                >
                                  {token.name} &nbsp; &nbsp;
                                  <FaRegCopy />
                                </h4>
                                <p className="desc">{token.totalSupply}</p>
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
                          <span className="title">Top 20 Tokens</span>
                        </div>
                        <div className="item wide"></div>
                      </div>

                      <div className="pricing__fields">
                        {tokens?.map((token, index) => (
                          <div className="item_row">
                            <div
                              onClick={() =>
                                navigator.clipboard.writeText(token.id)
                              }
                              className="item_col"
                            >
                              <span className="heading_text">
                                {token.name.slice(0, 12)}
                                &nbsp; &nbsp;
                                <FaRegCopy />
                              </span>
                            </div>

                            <div className="item_col">
                              <span className="option_text">
                                {token.totalSupply}
                              </span>
                            </div>
                            <div className="item_col">
                              <span className="option_text">
                                {token.totalValueLocked.slice(0, 12)}
                              </span>
                            </div>
                            <div className="item_col">
                              <span className="option_text">
                                {token.symbol}
                              </span>
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

export default TopExchangeTokens;
