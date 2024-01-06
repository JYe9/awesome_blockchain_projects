import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  getBalance,
  connectingTOKEN_SALEContract,
  connectingTOKENContract,
} from "../Utils/index";
import { ERC20Generator_ABI, ERC20Generator_BYTECODE } from "./constants";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //  STATE VARIABLE
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState();
  const [nativeToken, setNativeToken] = useState();
  const [tokenHolders, setTokenHolders] = useState([]);
  const [tokenSale, setTokenSale] = useState();
  const [currentHolder, setCurrentHolder] = useState();

  const fetchInitialData = async () => {
    try {
      //GET USER ACCOUNT
      const account = await ChechIfWalletConnected();
      //GET USER BALANCE
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);

      //TOKEN_CONTRACT
      const TOKEN_CONTRACT = await connectingTOKENContract();

      let tokenBalance;
      if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
      } else {
        tokenBalance = 0;
      }

      const tokenName = await TOKEN_CONTRACT.name();
      const tokenSymbol = await TOKEN_CONTRACT.symbol();
      const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
      const tokenStandard = await TOKEN_CONTRACT.standard();
      const tokenHolders = await TOKEN_CONTRACT._userId();
      const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
      const tokenAddress = await TOKEN_CONTRACT.address;

      const nativeToken = {
        tokenAddress: tokenAddress,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        tokenOwnerOfContract: tokenOwnerOfContract,
        tokenStandard: tokenStandard,
        tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
        tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
        tokenHolders: tokenHolders.toNumber(),
      };
      setNativeToken(nativeToken);

      //GETTING TOKEN HOLDERS
      const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
      setTokenHolders(getTokenHolder);

      //GETTING TOKEN HOLDER DATA
      if (account) {
        const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
          account
        );

        const currentHolder = {
          tokenId: getTokenHolderData[0].toNumber(),
          from: getTokenHolderData[1],
          to: getTokenHolderData[2],
          totalToken: ethers.utils.formatEther(
            getTokenHolderData[3].toString()
          ),
          tokenHolder: getTokenHolderData[4],
        };
        setCurrentHolder(currentHolder);
      }

      //TOKEN SALE CONTRACT
      const TOKEN_SALE_CONTRACT = await connectingTOKEN_SALEContract();
      const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
      const tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();
      const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf(
        "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
      );

      const tokenSale = {
        tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
        tokenSold: tokenSold.toNumber(),
        tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
      };

      setTokenSale(tokenSale);
      console.log(tokenSale);
      console.log(nativeToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const buyToken = async (nToken) => {
    try {
      const amount = ethers.utils.parseUnits(nToken.toString(), "ether");
      const contract = await connectingTOKEN_SALEContract();

      const buying = await contract.buyTokens(nToken, {
        value: amount.toString(),
      });
      await buying.wait();
      console.log(buying);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //NATIVE TOKEN TRANSFER
  const transferNativeToken = async () => {
    try {
      const TOKEN_SALE_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const TOKEN_AMOUNT = 500;
      const tokens = TOKEN_AMOUNT.toString();
      const transferAmount = ethers.utils.parseEther(tokens);

      const contract = await connectingTOKENContract();
      const transaction = await contract.transfer(
        TOKEN_SALE_ADDRESS,
        transferAmount
      );
      console.log(contract);

      await transaction.wait();
      console.log(transaction);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        transferNativeToken,
        buyToken,
        setAddress,
        connectWallet,
        currentHolder,
        tokenSale,
        tokenHolders,
        nativeToken,
        balance,
        address,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
