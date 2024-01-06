import React, { useState, useEffect } from "react";
import { ethers, BigNumber, Wallet } from "ethers";
import toast from "react-hot-toast";
import JSBI from "jsbi";
import axios from "axios";
import Web3Modal from "web3modal";

//new
import { SwapRouter } from "@uniswap/universal-router-sdk";
import {
  TradeType,
  Ether,
  Token,
  CurrencyAmount,
  Percent,
} from "@uniswap/sdk-core";
import { Trade as V2Trade } from "@uniswap/v2-sdk";
import {
  Pool,
  nearestUsableTick,
  TickMath,
  TICK_SPACINGS,
  FeeAmount,
  Trade as V3Trade,
  Route as RouteV3,
} from "@uniswap/v3-sdk";
import { MixedRouteTrade, Trade as RouterTrade } from "@uniswap/router-sdk";
import IUniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json";

import erc20Abi from "./abis__erc20.json";

//INTERNAL IMPORT
import {
  ERC20_ABI,
  TOKEN_ABI,
  V3_SWAP_ROUTER_ADDRESS,
  CONNECTING_CONTRACT,
  web3Provider,
} from "./constants";
import { shortenAddress, parseErrorMsg } from "../utils/index";

//INTERNAL IMPORT
export const CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
  const TOKEN_SWAP = "Trading Bot";
  const [loader, setLoader] = useState(false);
  const [address, setAddress] = useState("");
  const [chainID, setChainID] = useState();

  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg, { duration: 4000 });
  const notifySuccess = (msg) => toast.success(msg, { duration: 4000 });

  //CONNECT WALLET
  const connect = async () => {
    try {
      if (!window.ethereum) return notifyError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        setAddress(accounts[0]);
      } else {
        notifyError("Sorry, you have No account");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const newtork = await provider.getNetwork();
      setChainID(newtork.chainId);
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      notifyError(errorMsg);
      console.log(error);
    }
  };
  //LOAD_TOKEN_DATA
  const LOAD_TOKEN = async (token) => {
    try {
      const tokenDetail = await CONNECTING_CONTRACT(token);
      return tokenDetail;
    } catch (error) {
      console.log(error);
    }
  };
  //GET_POOL
  async function getPool(tokenA, tokenB, feeAmount, provider) {
    const [token0, token1] = tokenA.sortsBefore(tokenB)
      ? [tokenA, tokenB]
      : [tokenB, tokenA];

    const poolAddress = Pool.getAddress(token0, token1, feeAmount);

    const contract = new ethers.Contract(
      poolAddress,
      IUniswapV3Pool.abi,
      provider
    );

    let liquidity = await contract.liquidity();

    let { sqrtPriceX96, tick } = await contract.slot0();

    liquidity = JSBI.BigInt(liquidity.toString());
    sqrtPriceX96 = JSBI.BigInt(sqrtPriceX96.toString());

    return new Pool(token0, token1, feeAmount, sqrtPriceX96, liquidity, tick, [
      {
        index: nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[feeAmount]),
        liquidityNet: liquidity,
        liquidityGross: liquidity,
      },
      {
        index: nearestUsableTick(TickMath.MAX_TICK, TICK_SPACINGS[feeAmount]),
        liquidityNet: JSBI.multiply(liquidity, JSBI.BigInt("-1")),
        liquidityGross: liquidity,
      },
    ]);
    console.log("CALLING ME_____");
  }
  //SWAP_OPTIONS
  function swapOptions(options) {
    return Object.assign(
      {
        slippageTolerance: new Percent(5, 100),
        recipient: RECIPIENT,
      },
      options
    );
  }
  //BUILDTRADE
  function buildTrade(trades) {
    return new RouterTrade({
      v2Routes: trades
        .filter((trade) => trade instanceof V2Trade)
        .map((trade) => ({
          routev2: trade.route,
          inputAmount: trade.inputAmount,
          outputAmount: trade.outputAmount,
        })),
      v3Routes: trades
        .filter((trade) => trade instanceof V3Trade)
        .map((trade) => ({
          routev3: trade.route,
          inputAmount: trade.inputAmount,
          outputAmount: trade.outputAmount,
        })),
      mixedRoutes: trades
        .filter((trade) => trade instanceof MixedRouteTrade)
        .map((trade) => ({
          mixedRoute: trade.route,
          inputAmount: trade.inputAmount,
          outputAmount: trade.outputAmount,
        })),
      tradeType: trades[0].tradeType,
    });
  }

  const RECIPIENT = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B";
  //SWAP FUNCTION
  const swap = async (token_1, token_2, swapInputAmount) => {
    try {
      console.log("CALLING ME_____");
      const _inputAmount = 1;
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      // const provider = new ethers.providers.JsonRpcProvider(
      //   "https://rpc.ankr.com/eth"
      // );

      const newtork = await provider.getNetwork();
      const ETHER = Ether.onChain(newtork.chainId);
      // const ETHER = Ether.onChain(1);

      //TOKEN CONTRACT
      const tokenAddress1 = await CONNECTING_CONTRACT(
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
      );
      const tokenAddress2 = await CONNECTING_CONTRACT(
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      );

      //TOKEN INSTANS
      const TOKEN_A = new Token(
        tokenAddress1.chainId,
        tokenAddress1.address,
        tokenAddress1.decimals,
        tokenAddress1.symbol,
        tokenAddress1.name
      );
      const TOKEN_B = new Token(
        tokenAddress2.chainId,
        tokenAddress2.address,
        tokenAddress2.decimals,
        tokenAddress2.symbol,
        tokenAddress2.name
      );

      const WETH_USDC_V3 = await getPool(
        TOKEN_A,
        TOKEN_B,
        FeeAmount.MEDIUM,
        provider
      );

      const inputEther = ethers.utils.parseEther("1").toString();

      const trade = await V3Trade.fromRoute(
        new RouteV3([WETH_USDC_V3], ETHER, TOKEN_B),
        CurrencyAmount.fromRawAmount(ETHER, inputEther),
        TradeType.EXACT_INPUT
      );

      const routerTrade = buildTrade([trade]);

      const opts = swapOptions({});

      const params = SwapRouter.swapERC20CallParameters(routerTrade, opts);

      console.log(WETH_USDC_V3);
      console.log(trade);
      console.log(routerTrade);
      console.log(opts);
      console.log(params);

      let ethBalance;
      let tokenA;
      let tokenB;
      ethBalance = await provider.getBalance(RECIPIENT);
      tokenA = await tokenAddress1.balance;
      tokenB = await tokenAddress2.balance;
      console.log("---------------------------- BEFORE");
      console.log("ethBalance", ethers.utils.formatUnits(ethBalance, 18));
      console.log("tokenA", tokenA);
      console.log("tokenB", tokenB);

      const tx = await signer.sendTransaction({
        data: params.calldata,
        to: "0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B",
        value: params.value,
        from: RECIPIENT,
      });
      console.log("CALLING ME_____");

      const receipt = await tx.wait();
      console.log("---------------------------- SUCCESS?");
      console.log("status", receipt.status);

      ethBalance = await provider.getBalance(RECIPIENT);
      tokenA = await tokenAddress1.balance;
      tokenB = await tokenAddress2.balance;
      console.log("---------------------------- AFTER");
      console.log("ethBalance", ethers.utils.formatUnits(ethBalance, 18));
      console.log("tokenA", tokenA);
      console.log("tokenB", tokenB);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CONTEXT.Provider
      value={{
        TOKEN_SWAP,
        LOAD_TOKEN,
        notifyError,
        notifySuccess,
        setLoader,
        loader,
        connect,
        address,
        swap,
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
