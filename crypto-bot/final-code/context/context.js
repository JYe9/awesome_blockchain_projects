import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

//INTERNAL IMPORT
export const CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
  const TRADING_BOT = "Trading Bot";
  const [topTokens, setTopTokens] = useState([]);
  const [tradingCount, setTradingCount] = useState(0);
  const [loader, setLoader] = useState(false);

  let length;

  const LOAD_INITIAL_DATA = async () => {
    try {
      const URL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
      const query = `
      {
        tokens(orderBy: volumeUSD, orderDirection: desc, first:20){
          id
          name
          symbol
          decimals
          volume
          volumeUSD
          totalSupply
          feesUSD
          txCount
          poolCount
          totalValueLockedUSD
          totalValueLocked
          derivedETH
        }
      }`;
      const axiosData = await axios.post(URL, { query: query });
      setTopTokens(axiosData.data.data.tokens);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LOAD_INITIAL_DATA();
  }, []);

  //UNISWAP ABI AND ADDRESS

  const routerAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Uniswap Router
  const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"; // Uniswap Quoter

  const ROUTER = (PROVIDER) => {
    const router = new ethers.Contract(
      routerAddress,
      [
        "function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)",
      ],
      PROVIDER
    );
    return router;
  };

  const QUOTER = (PROVIDER) => {
    const quoter = new ethers.Contract(
      quoterAddress,
      [
        "function quoteExactInputSingle(address tokenIn, address tokenOut, uint24 fee, uint256 amountIn, uint160 sqrtPriceLimitX96) public view returns (uint256 amountOut)",
      ],
      PROVIDER
    );
    return quoter;
  };
  const TOKEN = (PROVIDER, TOKEN_B) => {
    const token = new ethers.Contract(
      TOKEN_B,
      [
        "function approve(address spender, uint256 amount) external returns (bool)",
        "function allowance(address owner, address spender) public view returns (uint256)",
      ],
      PROVIDER
    );
    return token;
  };

  //BUY
  const buyTokens = async (
    tokenAddress1,
    tokenAddress2,
    fee,
    address,
    buyAmount,
    router
  ) => {
    console.log("Buying Token");
    const deadline = Math.floor(Date.now() / 1000) + 600;
    const transaction = await router.exactInputSingle(
      [tokenAddress1, tokenAddress2, fee, address, deadline, buyAmount, 0, 0],
      { value: buyAmount }
    );

    await transaction.wait();
    console.log(transaction.hash);
    return transaction.hash;
    try {
    } catch (error) {
      console.log(error);
    }
  };

  //SELL
  const sellTokens = async (
    tokenAddress1,
    tokenAddress2,
    fee,
    userAddress,
    buyAmount,
    router,
    sellAmount,
    account
  ) => {
    try {
      const token = TOKEN(account, tokenAddress2);

      const allowance = await token.allowance(userAddress, routerAddress);
      console.log(`Current allownace: ${allowance}`);

      if (allowance < sellAmount) {
        console.log("Approving Spend (Bulk approve in production)");
        const atx = await token.approve(routerAddress, sellAmount);
        await atx.wait();
      }

      const deadline = Math.floor(Date.now() / 1000) + 600;
      const tx = await router.exactInputSingle([
        tokenAddress2,
        tokenAddress1,
        fee,
        userAddress,
        deadline,
        sellAmount,
        0,
        0,
      ]);
      await tx.wait();
      console.log(tx.hash);
      return tx.hash;
    } catch (error) {
      console.log(error);
    }
  };

  //SELL
  const trading = async (activeNetwork, tradeToken) => {
    setLoader(true);
    try {
      //WEB3 PROVIDER
      const provider = new ethers.JsonRpcProvider(
        `${activeNetwork.rpcUrl}${activeNetwork.apiKey}`
      );

      const wallet = new ethers.Wallet(`0x${activeNetwork.praviteKey}`);

      const buyAmount = ethers.parseUnits(tradeToken.buyAmount, "ether");

      const targetPrice = BigInt(tradeToken.targetPrice); //target exchange rate

      const targetAmountOut = buyAmount * targetPrice;

      const sellAmount = buyAmount / targetPrice;

      const account = wallet.connect(provider);

      const token = TOKEN(account, tradeToken.tokenAddress2);
      const router = ROUTER(account);
      const quoter = QUOTER(account);

      //CHECK PRICE BEFORE TRADE
      const amountOut = await quoter.quoteExactInputSingle(
        tradeToken.tokenAddress1,
        tradeToken.tokenAddress2,
        tradeToken.fee * 1,
        buyAmount,
        0
      );

      console.log(amountOut);
      console.log(`Current Exchange Rate:${amountOut.toString()}`);
      console.log(`Target Exchange Rate:${targetAmountOut.toString()}`);

      let transactionHash = "HESTING FREQUENCY";

      if (amountOut < targetAmountOut) {
        transactionHash = await buyTokens(
          tradeToken.tokenAddress1,
          tradeToken.tokenAddress2,
          tradeToken.fee * 1,
          wallet.address,
          buyAmount,
          router
        );
      }

      const userAddress = activeNetwork.walletAddress;
      if (amountOut > targetAmountOut) {
        transactionHash = await sellTokens(
          tradeToken.tokenAddress1,
          tradeToken.tokenAddress2,
          tradeToken.fee * 1,
          userAddress,
          buyAmount,
          router,
          sellAmount,
          account
        );
      }

      //STORING DATA
      const liveTransaction = {
        currentRate: `${amountOut.toString()}`,
        targetRate: `${targetAmountOut.toString()}`,
        transactionHash: transactionHash,
      };

      let transactionArray = [];

      const listTransaction = localStorage.getItem("LIVE_TRANSACTION");
      if (listTransaction) {
        transactionArray = JSON.parse(localStorage.getItem("LIVE_TRANSACTION"));
        transactionArray.push(liveTransaction);
        localStorage.setItem(
          "LIVE_TRANSACTION",
          JSON.stringify(transactionArray)
        );
      } else {
        transactionArray.push(liveTransaction);
        localStorage.setItem(
          "LIVE_TRANSACTION",
          JSON.stringify(transactionArray)
        );
      }
      setTradingCount(transactionArray.length + 1);
      console.log(transactionArray);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CONTEXT.Provider
      value={{
        TRADING_BOT,
        topTokens,
        trading,
        tradingCount,
        length,
        setTradingCount,
        setLoader,
        loader,
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
