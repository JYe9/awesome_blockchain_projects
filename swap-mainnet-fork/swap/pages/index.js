import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  Feature,
  Hero,
  Platfrom,
  Preloader,
  Scroll,
  Scurity,
  Statistics,
  Testomonial,
  Token,
} from "../components/index";
import { CONTEXT } from "../context/context";

const index = () => {
  const {
    TOKEN_SWAP,
    LOAD_TOKEN,

    setLoader,
    loader,
    connect,
    address,
    notifyError,
    notifySuccess,
    swap,
  } = useContext(CONTEXT);

  //OPEN TOKEN COMPONENT
  const [token_1, setToken_1] = useState();
  const [token_2, setToken_2] = useState();
  const [openToken, setOpenToken] = useState(false);
  //INPUT
  const [slippageAmount, setSlippageAmount] = useState(2);
  const [deadlineMinutes, setDeadlineMinutes] = useState(10);
  const [inputAmount, setInputAmount] = useState(undefined);
  //OUTPUT
  const [outputAmount, setOutputAmount] = useState(undefined);
  const [transaction, setTransaction] = useState(undefined);
  const [ratio, setRatio] = useState(undefined);

  return (
    <div>
      <Preloader />
      <Header address={address} connect={connect} />

      <Hero
        setInputAmount={setInputAmount}
        setLoader={setLoader}
        setOpenToken={setOpenToken}
        LOAD_TOKEN={LOAD_TOKEN}
        token_1={token_1}
        token_2={token_2}
        setToken_1={setToken_1}
        setToken_2={setToken_2}
        swap={swap}
      />

      <Feature />
      <Platfrom />
      <Statistics />
      <Scurity />
      <Testomonial />
      <Footer />

      {openToken && (
        <div className="new_loader">
          <Token
            notifyError={notifyError}
            setOpenToken={setOpenToken}
            LOAD_TOKEN={LOAD_TOKEN}
            setToken_1={setToken_1}
            setToken_2={setToken_2}
            token_1={token_1}
            token_2={token_2}
          />
        </div>
      )}
    </div>
  );
};

export default index;
