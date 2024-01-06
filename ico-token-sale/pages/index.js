import React from "react";

//INTERNAL IMPORT
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale,
} from "../Components/index";
import { useStateContext } from "../Context/index";

const index = () => {
  const {
    transferNativeToken,
    buyToken,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address,
    setAddress,
    connectWallet,
  } = useStateContext();
  return (
    <div class="v_dark">
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
