import React, { useState, useEffect, useContext, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";

const StateContext = createContext();

//----CONSTANTS
import { NFT_API_ABI, NFT_API_ADDRESS } from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(NFT_API_ADDRESS, NFT_API_ABI, signerOrProvider);

//---CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const StateContextProvider = ({ children }) => {
  //FRONTEND
  const [userBlance, setUserBlance] = useState();
  const [loading, setloading] = useState(false);
  const [address, setAddress] = useState();

  //---CHECK IF WALLET IS CONNECTD
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      setAddress(accounts[0]);

      if (accounts[0]) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const getBalance = await provider.getBalance(accounts[0]);
        const bal = ethers.utils.formatEther(getBalance);
        setUserBlance(bal);
      }

      return accounts[0];
    } catch (error) {
      console.log("not connected");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  //---CONNET WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum) console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAddress(accounts[0]);
    } catch (error) {}
  };

  //CONTRACT FUNCTION
  //---UPLOAD
  const UploadImage = async (imageInfo) => {
    //CONTRACT
    const contract = await connectingWithSmartContract();

    const { title, description, email, category, image } = imageInfo;
    try {
      //CHARGE
      const listingPrice = await contract.listingPrice();

      const createNFTs = await contract.uploadIPFS(
        address,
        image,
        title,
        description,
        email,
        category,
        {
          value: listingPrice.toString(),
        }
      );

      console.log(createNFTs);
      //API CALL
      if (createNFTs) {
        const response = await axios({
          method: "POST",
          url: `/api/v1/NFTs`,
          data: {
            title: title,
            description: description,
            category: category,
            image: image,
            address: address,
            email: email,
          },
        });
        console.log(response);
      }

      setloading(false);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //--GET CONTRACT DATA
  const getUploadedImages = async () => {
    //CONTRACT
    const contract = await connectingWithSmartContract();
    //ALL IMAGES

    const address = await checkIfWalletConnected();

    if (address) {
      const images = await contract.getAllNFTs();

      // TOTAL UPLOAD
      const totalUpload = await contract.imagesCount();
      //LISTING PRICE
      const listingPrice = await contract.listingPrice();
      const allImages = images.map((images, i) => ({
        owner: images.creator,
        title: images.title,
        description: images.description,
        email: images.email,
        category: images.category,
        fundraised: images.fundraised,
        image: images.image,
        imageID: images.id.toNumber(),
        createdAt: images.timestamp.toNumber(),
        listedAmount: ethers.utils.formatEther(listingPrice.toString()),
        totalUpload: totalUpload.toNumber(),
      }));
      return allImages;
    } else {
      return [];
    }
  };

  //--GET SINGLE IMAGE
  const singleImage = async (id) => {
    try {
      //CONTRACT
      const contract = await connectingWithSmartContract();
      const data = await contract.getImage(Number(id));

      const image = {
        title: data[0],
        description: data[1],
        email: data[2],
        category: data[3],
        fundRaised: ethers.utils.formatEther(data[4].toString()),
        creator: data[5],
        imageURL: data[6],
        createdAt: data[7].toNumber(),
        imageId: data[8].toNumber(),
      };

      return image;
    } catch (error) {
      console.log(error);
    }
  };

  //DONATE
  const donateFund = async ({ amount, Id }) => {
    //CONTRACT
    const contract = await connectingWithSmartContract();
    try {
      console.log(amount, Id);
      const transaction = await contract.donateToImage(Number(Id), {
        value: amount.toString(),
      });
      console.log(transaction);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //GET API DATA
  const getAllNftsAPI = async () => {
    const response = await axios({
      method: "GET",
      url: "/api/v1/NFTs",
    });
    // console.log(response);
  };

  //SINGLE NFTS API
  const getSingleNftsAPI = async (id) => {
    const response = await axios({
      method: "GET",
      url: `/api/v1/NFTs${id}`,
    });
    console.log(response);
  };

  return (
    <StateContext.Provider
      value={{
        //CONTRACT
        address,
        userBlance,
        connectWallet,
        setloading,
        loading,
        //FUNCTION
        UploadImage,
        getUploadedImages,
        donateFund,
        singleImage,
        //API
        getAllNftsAPI,
        getSingleNftsAPI,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
