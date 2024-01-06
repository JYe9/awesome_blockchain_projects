import React, { useState, useEffect, useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
  useContractEvents,
  //NEW HOOKS FOR FRONTEND
  useDisconnect,
  useConnectionStatus,
  useSigner,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x99bF3D43bb012d4219bd5Db47A37Bd5d308D917A"
  );

  const address = useAddress();
  const connect = useMetamask();

  //FRONTEND
  const disconnect = useDisconnect();
  const connectionStatus = useConnectionStatus();
  const signer = useSigner();
  const [userBlance, setUserBlance] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //FUNCTION

  //CREATE PROPERTY
  const { mutateAsync: listProperty } = useContractWrite(
    contract,
    "listProperty"
  );
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
      setIsLoading(true);
      const data = await listProperty({
        args: [
          address,
          price,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      console.info("contract call successs", data);
      setIsLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //UPDATE PROPERTY
  const { mutateAsync: updateProperty, isLoading: updatePropertyLoding } =
    useContractWrite(contract, "updateProperty");

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
      setIsLoading(true);
      const data = await updateProperty({
        args: [
          address,
          productId,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      console.info("contract call successs", data);
      setIsLoading(false);
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //UPDATE PRICE
  const { mutateAsync: updatePrice, isLoading: updatePriceLoding } =
    useContractWrite(contract, "updatePrice");

  const updatePriceFunction = async (form) => {
    const { productID, price } = form;
    console.log(form);
    try {
      setIsLoading(true);
      const data = await updatePrice({
        args: [address, productID, ethers.utils.parseEther(price)],
      });
      console.info("contract call successs", data);
      setIsLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //BUY PROPERTY
  const { mutateAsync: buyProperty } = useContractWrite(
    contract,
    "buyProperty"
  );

  const buyPropertyFunction = async (buying) => {
    const { productID, amount } = buying;

    try {
      setIsLoading(true);
      const data = await buyProperty({
        args: [productID, address],
        value: ethers.utils.parseEther(amount),
      });
      console.info("contract call successs", data);
      setIsLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //ADD REVIEW
  const { mutateAsync: addReview, isLoading: addReviewLoading } =
    useContractWrite(contract, "addReview");
  const addReviewFunction = async (from) => {
    const { productID, rating, comment } = from;

    try {
      setIsLoading(true);
      const data = await addReview({
        args: [productID, rating, comment, address],
      });
      console.info("contract call successs", data);
      setIsLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //REVIEW - LIKE
  const { mutateAsync: likeReview, isLoading: likeReviewLoading } =
    useContractWrite(contract, "likeReview");

  const likeReviewFunction = async (from) => {
    const { productID, reviewIndex } = from;
    try {
      setIsLoading(true);
      const data = await likeReview({
        args: [productID, reviewIndex, address],
      });
      console.info("contract call successs", data);
      setIsLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //GET PROPERTIES DATA NORAML

  //getAllProperties()
  const getPropertiesData = async () => {
    setIsLoading(true);
    const properties = await contract.call("getAllProperties");
    const balance = await signer?.getBalance();

    const userBalance = address
      ? ethers.utils.formatEther(balance?.toString())
      : "";
    setUserBlance(userBalance);
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
    setIsLoading(false);
    return parsedProperties;
  };

  //getHighestRatedProduct()
  const {
    data: getHighestRatedProduct,
    isLoading: getHighestRatedProductLoading,
  } = useContractRead(contract, "getHighestRatedProduct");

  //getProductReviews()
  const getProductReviewsFunction = async (productId) => {
    try {
      const getProductReviews = await contract.call("getProductReviews", [
        productId,
      ]);

      const parsedReviews = getProductReviews?.map((review, i) => ({
        reviewer: review.reviewer,
        likes: review.likes.toNumber(),
        comment: review.comment,
        rating: review.rating,
        productID: review.productId.toNumber(),
      }));

      return parsedReviews;
    } catch (error) {
      console.log(error);
    }
  };

  //getProperty()
  const getPropertyFunction = async (id) => {
    const productID = id * 1;

    try {
      setIsLoading(true);
      const propertyItem = await contract.call("getProperty", [productID]);
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
      setIsLoading(false);
      return property;
    } catch (error) {
      console.log(error);
    }
  };

  //getUserProperties()
  const getUserPropertiesFunction = async () => {
    try {
      setIsLoading(true);
      const properties = await contract.call("getUserProperties", [address]);

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

      setIsLoading(false);
      return parsedProperties;
    } catch (error) {
      console.log(error);
    }
  };

  //getUserReviews()
  const getUserReviewsFunction = () => {
    try {
      setIsLoading(true);
      const { data: getUserReviews, isLoading: getUserReviewsLoading } =
        useContractRead(contract, "getUserReviews", [address]);

      setIsLoading(false);
      return getUserReviews, getUserReviewsLoading;
    } catch (error) {}
  };
  //totalProperty()
  const totalPropertyFunction = async () => {
    try {
      setIsLoading(true);
      const totalProperty = await contract.call("propertyIndex");
      setIsLoading(false);
      return totalProperty;
    } catch (error) {
      console.log(error);
    }
  };

  const totalReviewsFunction = async () => {
    try {
      setIsLoading(true);
      const totalReviews = await contract.call("reviewsCounter");
      setIsLoading(false);
      return totalReviews.toNumber();
    } catch (error) {
      console.log(error);
    }
  };

  //EVENTS
  // You can get a specific event
  const { data: event } = useContractEvents(contract, "PropertyListed");
  // All events
  const { data: allEvents } = useContractEvents(contract);
  // By default, you set up a listener for all events, but you can disable it
  const { data: eventWithoutListener } = useContractEvents(
    contract,
    undefined,
    { subscribe: false }
  );

  // console.log(event);
  // console.log(allEvents);
  // console.log(eventWithoutListener);

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createPropertyFunction,
        updatePropertyFunction,
        updatePriceFunction,
        buyPropertyFunction,
        //REVIEW
        addReviewFunction,
        likeReviewFunction,
        getProductReviewsFunction,
        getPropertyFunction,
        getUserPropertiesFunction,
        getUserReviewsFunction,
        totalPropertyFunction,
        totalReviewsFunction,
        getHighestRatedProduct,
        //CONTRACT DATA
        getPropertiesData,
        userBlance,
        isLoading,
        //FRENT_END
        disconnect,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
