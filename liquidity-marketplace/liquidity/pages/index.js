import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  Hero,
  ICOTokens,
  LiquidityHistory,
  Access,
  App,
  Analytic,
  AddPool,
  AddLiquidity,
  ICOSale,
  Loader,
} from "../components/index";
import { CONTEXT } from "../context/index";

const index = () => {
  //CONTEXT DATA
  const {
    connect,
    GET_POOL_ADDRESS,
    CREATE_LIQUIDITY,
    GET_ALL_LIQUIDITY,
    LOAD_TOKEN,
    notifyError,
    notifySuccess,
    address,
    loader,
    DAPP_NAME,
    tokenSale,
    nativeToken,
    transferNativeToken,
    buyToken,
  } = useContext(CONTEXT);
  //MODEL STATE
  const [openAddPool, setOpenAddPool] = useState(false);
  const [openAllLiquidity, setOpenAllLiquidity] = useState(false);
  return (
    <div class="crumina-grid">
      <Header
        setOpenAddPool={setOpenAddPool}
        setOpenAllLiquidity={setOpenAllLiquidity}
        connect={connect}
        address={address}
      />

      <div class="main-content-wrapper">
        <Hero transferNativeToken={transferNativeToken} />
        <ICOTokens />
        <LiquidityHistory GET_ALL_LIQUIDITY={GET_ALL_LIQUIDITY} />
        <App />
        <Analytic />
        <Access />
        <ICOSale
          tokenSale={tokenSale}
          nativeToken={nativeToken}
          buyToken={buyToken}
        />
      </div>
      {openAddPool && (
        <div className="new_center">
          <AddPool
            setOpenAddPool={setOpenAddPool}
            LOAD_TOKEN={LOAD_TOKEN}
            notifyError={notifyError}
            notifySuccess={notifySuccess}
            GET_POOL_ADDRESS={GET_POOL_ADDRESS}
          />
        </div>
      )}
      {openAllLiquidity && (
        <div className="new_center">
          <AddLiquidity
            CREATE_LIQUIDITY={CREATE_LIQUIDITY}
            setOpenAllLiquidity={setOpenAllLiquidity}
          />
        </div>
      )}

      {loader && (
        <div className="new_loader">
          <Loader />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default index;
