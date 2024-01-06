import { ethers } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import factoryAbi from "./factoryAbi.json";
import ERC20ABI from "./abi.json";

import Woox from "./Woox.json";
import ICOWoox from "./ICOWoox.json";
import Liqudity from "./Liqudity.json";

//TOKEN
export const Woox_ADDRESS = "0x9E4CCb40b39D63A433d369cf50B74Bf739B23653";
export const Woox_ABI = Woox.abi;

//TOKEN SALE
export const ICOWoox_ADDRESS = "0x58Db7D49D1D619860fc7AF5DCB9ce5CC75c96872";
export const ICOWoox_ABI = ICOWoox.abi;
//LIQUDITY
export const Liqudity_address = "0x85bFe205CC438f6742165C5F61Bf2EdeC9993C5F";
export const Liqudity_abi = Liqudity.abi;

export const FACTORY_ABI = factoryAbi;
export const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const positionManagerAddress =
  "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

const fetchContract = (signer, ABI, ADDRESS) =>
  new ethers.Contract(ADDRESS, ABI, signer);

export const web3Provider = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    return provider;
  } catch (error) {
    console.log(error);
  }
};

export const CONNECTING_CONTRACT = async (ADDRESS) => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const newtork = await provider.getNetwork();

    const signer = provider.getSigner();
    const contract = fetchContract(signer, ERC20ABI, ADDRESS);

    //USER ADDRESS
    const userAddress = signer.getAddress();
    const balance = await contract.balanceOf(userAddress);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const supply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const address = await contract.address;

    const token = {
      address: address,
      name: name,
      symbol: symbol,
      decimals: decimals,
      supply: ethers.utils.formatEther(supply.toString()),
      balance: ethers.utils.formatEther(balance.toString()),
      chainId: newtork.chainId,
    };

    return token;
  } catch (error) {
    console.log(error);
  }
};

export const internalWooxContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, Woox_ABI, Woox_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const internalICOWooxContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, ICOWoox_ABI, ICOWoox_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const internalAddLiqudity = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, Liqudity_abi, Liqudity_address);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};
