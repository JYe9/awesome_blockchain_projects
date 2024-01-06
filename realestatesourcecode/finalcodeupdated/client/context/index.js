import React, { useEffect, useState, useContext, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL  IMPORT
import { REAL_ESTATE_ABI, REAL_ESTATE_ADDRESS } from "./constants";

//FETCH CONTRACT
const FETCH_CONTRACT = (PROVIDER) =>
  new ethers.Contract(REAL_ESTATE_ADDRESS, REAL_ESTATE_ABI, PROVIDER);

//CONNECTING WITH CONTRACT
const connectingWithSmartContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const PROVIDER = provider.getSigner();

    const contract = FETCH_CONTRACT(PROVIDER);

    return contract;
  } catch (error) {
    console.log(error);
  }
};
// INTERNAL
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //STATE VARIABLE
  const [currentAccount, setCurrentAccount] = useState();
  const [accountBalance, setAccountBalance] = useState();
  const [userBlance, setUserBlance] = useState();
  const [getHighestRatedProduct, setGetHighestRatedProduct] = useState();

  //---CHECK IF WALLET IS CONNECTD
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install MateMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // console.log(accounts[0]);
      } else {
        console.log("NO ACCOUNT");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const getBalance = await provider.getBalance(accounts[0]);
      const convertBal = ethers.utils.formatEther(getBalance);
      setAccountBalance(convertBal);
      // console.log(convertBal);

      return accounts[0];
    } catch (error) {
      console.log("NO CONNACTION");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  //---CONNET WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MateMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //CREATE PROPERTY
  const createPropertyFunction = async (form) => {
    const {
      propertyTitle,
      description,
      category,
      price,
      images,
      propertyAddress,
    } = form;

    try {
      const contract = await connectingWithSmartContract();

      const address = await checkIfWalletConnected();

      const transaction = await contract.listProperty(
        address,
        price,
        propertyTitle,
        category,
        images,
        propertyAddress,
        description
      );

      await transaction.wait();
      console.log("contract call successs", transaction);
      window.location.reload();
    } catch (err) {
      console.log("contract call failure", err);
    }
  };

  //UPDATE PROPERTY
  const updatePropertyFunction = async (form) => {
    const {
      productId,
      propertyTitle,
      description,
      category,
      images,
      propertyAddress,
    } = form;

    try {
      const contract = await connectingWithSmartContract();

      const address = await checkIfWalletConnected();
      const transaction = await contract.updateProperty(
        address,
        productId,
        propertyTitle,
        category,
        images,
        propertyAddress,
        description
      );

      await transaction.wait();
      console.info("contract call successs", transaction);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //UPDATE PRICE
  const updatePriceFunction = async (form) => {
    const { productID, price } = form;
    try {
      const contract = await connectingWithSmartContract();

      const address = await checkIfWalletConnected();
      const transaction = await contract.updatePrice(
        address,
        productID,
        ethers.utils.parseEther(price)
      );

      await transaction.wait();
      console.info("contract call successs", transaction);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //BUY PROPERTY
  const buyPropertyFunction = async (buying) => {
    const { productID, amount } = buying;
    const money = ethers.utils.parseEther(amount);

    try {
      const contract = await connectingWithSmartContract();

      const address = await checkIfWalletConnected();

      const transaction = await contract.buyProperty(productID, address, {
        value: money.toString(),
      });
      await transaction.wait();
      console.info("contract call successs", transaction);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //ADD REVIEW
  const addReviewFunction = async (from) => {
    const { productID, rating, comment } = from;

    try {
      const contract = await connectingWithSmartContract();

      const address = await checkIfWalletConnected();

      const transaction = await contract.addReview(
        productID,
        rating,
        comment,
        address
      );
      await transaction.wait();
      console.info("contract call successs", transaction);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //REVIEW - LIKE
  const likeReviewFunction = async (from) => {
    const { productID, reviewIndex } = from;
    try {
      const contract = await connectingWithSmartContract();

      const address = await checkIfWalletConnected();

      const transaction = await contract.likeReview(
        productID,
        reviewIndex,
        address
      );

      await transaction.wait();
      console.info("contract call successs", transaction);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //GET PROPERTIES DATA NORAML

  //getAllProperties()
  const getPropertiesData = async () => {
    const contract = await connectingWithSmartContract();

    const properties = await contract?.getAllProperties();

    const parsedProperties = properties?.map((property, i) => ({
      owner: property.owner,
      title: property.propertyTitle,
      description: property.description,
      category: property.category,
      price: ethers.utils.formatEther(property.price.toString()),
      productID: property.productID.toNumber(),
      reviewers: property.reviewers,
      reviews: property.reviews,
      image: property.images,
      address: property.propertyAddress,
    }));

    return parsedProperties;
  };

  //getHighestRatedProduct()
  const getHighestRatedProductFunction = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const totalReviews = await contract.getHighestRatedProduct();

      setGetHighestRatedProduct(totalReviews.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

  //getProductReviews()
  const getProductReviewsFunction = async (productId) => {
    try {
      const contract = await connectingWithSmartContract();

      const getProductReviews = await contract.getProductReviews(
        Number(productId)
      );

      const parsedReviews = getProductReviews?.map((review, i) => ({
        reviewer: review.reviewer,
        likes: review.likes.toNumber(),
        comment: review.comment,
        rating: review.rating,
        productID: review.productId.toNumber(),
        reviewIndex: review.reviewIndex.toNumber(),
      }));
      return parsedReviews;
    } catch (error) {
      console.log(error);
    }
  };

  //getProperty()
  const getPropertyFunction = async (id) => {
    try {
      const contract = await connectingWithSmartContract();
      const propertyItem = await contract.getProperty(Number(id));

      const property = {
        productID: propertyItem?.[0].toNumber(),
        owner: propertyItem?.[1],
        title: propertyItem?.[3],
        category: propertyItem?.[4],
        description: propertyItem?.[7],
        price: ethers.utils.formatEther(propertyItem?.[2].toString()),
        address: propertyItem?.[6],
        image: propertyItem?.[5],
      };

      return property;
    } catch (error) {
      console.log(error);
    }
  };

  //getUserProperties()
  const getUserPropertiesFunction = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const address = await checkIfWalletConnected();

      const properties = await contract.getUserProperties(address);

      const parsedProperties = properties.map((property, i) => ({
        owner: property.owner,
        title: property.propertyTitle,
        description: property.description,
        category: property.category,
        price: ethers.utils.formatEther(property.price.toString()),
        productID: property.productID.toNumber(),
        reviewers: property.reviewers,
        reviews: property.reviews,
        image: property.images,
        address: property.propertyAddress,
      }));

      return parsedProperties;
    } catch (error) {
      console.log(error);
    }
  };

  //getUserReviews()
  const getUserReviewsFunction = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const address = await checkIfWalletConnected();
      const getUserReviews = await contract.getUserReviews(address);

      const parsedUserReviews = getUserReviews.map((property, i) => ({
        comment: property.comment,
        likes: property.likes.toNumber(),
        productId: property.productId.toNumber(),
        rating: property.rating,
        reviewIndex: property.reviewIndex.toNumber(),
        reviewer: property.reviewer,
      }));

      return parsedUserReviews;
    } catch (error) {}
  };

  //totalProperty()
  const totalPropertyFunction = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const address = await checkIfWalletConnected();
      const totalProperty = await contract.propertyIndex();

      return totalProperty.toNumber();
    } catch (error) {
      console.log(error);
    }
  };

  const totalReviewsFunction = async () => {
    try {
      const contract = await connectingWithSmartContract();
      const address = await checkIfWalletConnected();
      const totalReviews = await contract.reviewsCounter();

      return totalReviews.toNumber();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHighestRatedProductFunction();
    getUserReviewsFunction();
    totalPropertyFunction();
    totalReviewsFunction();
  }, []);

  return (
    <StateContext.Provider
      value={{
        //CONTRACT
        connectWallet,
        currentAccount,
        accountBalance,
        //PROPERTY
        createPropertyFunction,
        updatePropertyFunction,
        updatePriceFunction,
        buyPropertyFunction,
        getPropertyFunction,
        getUserPropertiesFunction,
        totalPropertyFunction,
        getPropertiesData,
        //REVIEW
        addReviewFunction,
        likeReviewFunction,
        getProductReviewsFunction,
        getUserReviewsFunction,
        totalReviewsFunction,
        getHighestRatedProduct,
        //STATE VARIABLE
        userBlance,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
