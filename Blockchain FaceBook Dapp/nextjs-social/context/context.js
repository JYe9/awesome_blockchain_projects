import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from "next/router";

///INTERNAL IMPORT
import {
  getBalance,
  checkIfWalletConnected,
  CALLING_CONTRACT,
  connectWallet,
  parseErrorMsg,
} from "../utils/utils";

export const SOCAIL_MEDIA_Context = React.createContext();

export const SOCAIL_MEDIA_Provider = ({ children }) => {
  const SOCIAL_MEDIA_DAPP = "TBCoders";
  const [loader, setLoader] = useState(false);

  //GLOBAL STATE VARIABLE
  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [totalUser, setTotalUser] = useState();
  const [AppUsers, setAppUsers] = useState([]);
  const [AppUserPost, setAppUserPost] = useState([]);
  const [AllAppPost, setAllAppPost] = useState([]);
  const [userAccount, setUserAccount] = useState({});
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowing, setUserFollowing] = useState([]);
  //GROUP
  const [memberGroups, setMemberGroups] = useState([]);
  //LOGIN STATUS
  const [connected, setConnected] = useState("CREATE_ACCOUNT");

  //NFT MARKETPLACE
  const INITAIL_CONTRACT = async () => {
    try {
      //GET USER ADDRESS
      const account = await checkIfWalletConnected();
      setUserAddress(account.toLowerCase());
      //GET USER BALANCE
      const getBallance = await getBalance();
      setUserBalance(ethers.utils.formatUnits(getBallance.toString(), "ether"));
      //GET CONTRACT
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();
      //GET ALL USER ADDRESS
      const getAddresses = await SOCIAL_CONTRACT.getAddresses();
      for (let i = 0; i < getAddresses.length; i++) {
        if (getAddresses[i].toLowerCase() == account.toLowerCase()) {
          setConnected("LOGIN_ACCOUNT");
        }
      }

      //GET ALL USER
      const getAllAppUser = await SOCIAL_CONTRACT.getAllAppUser();

      const _parsedAppUser = getAllAppUser.map((appUser) => ({
        owner: appUser.owner,
        name: appUser.name,
        timeCreated: appUser.timeCreated.toNumber(),
        userID: appUser.id.toNumber(),
        postCount: appUser.postCount.toNumber(),
      }));
      setAppUsers(_parsedAppUser);

      //GET APP POST
      const getAllPosts = await SOCIAL_CONTRACT.getAllPosts();
      const _parsedAllPosts = getAllPosts.map((post) => ({
        author: post.author,
        postType: post.postType,
        postDescription: post.postDescription,
        postURL: post.postURL,
        timeCreated: post.timeCreated.toNumber(),
        postID: post.postID.toNumber(),
        likes: post.likes.toNumber(),
        comments: post.comments,
      }));
      setAllAppPost(_parsedAllPosts);

      //GET TOTAL USER
      const getUserCount = await SOCIAL_CONTRACT.getUserCount();
      setTotalUser(getUserCount.toNumber());

      if (account) {
        //GET USER POST
        const getPosts = await SOCIAL_CONTRACT.getPosts(account);

        const _parsedPost = getPosts.map((post) => ({
          author: post.author,
          postType: post.postType,
          postDescription: post.postDescription,
          postURL: post.postURL,
          timeCreated: post.timeCreated.toNumber(),
          postID: post.postID.toNumber(),
          likes: post.likes.toNumber(),
          comments: post.comments,
        }));
        setAppUserPost(_parsedPost);
        //GET USER DETAILS
        const userDetails = await SOCIAL_CONTRACT.profiles(account);
        const _parsedData = {
          name: userDetails.name,
          owner: userDetails.owner,
          followerCount: userDetails.followerCount.toNumber(),
          followingCount: userDetails.followingCount.toNumber(),
          postCount: userDetails.postCount.toNumber(),
          timeCreated: userDetails.timeCreated.toNumber(),
          userID: userDetails.id.toNumber(),
        };
        setUserAccount(_parsedData);

        //GET USER FOLLOWERS
        const getFollowers = await SOCIAL_CONTRACT.getFollowers(account);
        const followers = await Promise.all(
          getFollowers.map(async (address) => {
            const singleFollower = await SOCIAL_CONTRACT.profiles(address);
            return {
              name: singleFollower.name,
              owner: singleFollower.owner,
              followerCount: singleFollower.followerCount.toNumber(),
              followingCount: singleFollower.followingCount.toNumber(),
              postCount: singleFollower.postCount.toNumber(),
              timeCreated: singleFollower.timeCreated.toNumber(),
              userID: singleFollower.id.toNumber(),
            };
          })
        );
        setUserFollowers(followers);

        //GET USER FOLLOWING
        const getFollowing = await SOCIAL_CONTRACT.getFollowing(account);
        const followering = await Promise.all(
          getFollowing.map(async (address) => {
            const singleFollower = await SOCIAL_CONTRACT.profiles(address);
            return {
              name: singleFollower.name,
              owner: singleFollower.owner,
              followerCount: singleFollower.followerCount.toNumber(),
              followingCount: singleFollower.followingCount.toNumber(),
              postCount: singleFollower.postCount.toNumber(),
              timeCreated: singleFollower.timeCreated.toNumber(),
              userID: singleFollower.id.toNumber(),
            };
          })
        );
        setUserFollowing(followering);
      }
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      console.log(errorMsg);
    }
  };

  useEffect(() => {
    INITAIL_CONTRACT();
  }, []);

  //READ MESSAGE
  const READ_MESSAGE = async (address) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const readMessage = await SOCIAL_CONTRACT.readMessage(address);
      const _parsedMessage = readMessage.map((message) => ({
        sender: message.sender,
        timestamp: message.timestamp.toNumber(),
        message: message.msg,
      }));

      return _parsedMessage;
    } catch (error) {
      console.log(error);
    }
  };

  //CREATE ACCOUNT
  const CREATE_ACCOUNT = async (formInput) => {
    try {
      const { name } = formInput;
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.createProfile(name);
      await transaction.wait();

      if (transaction && !transaction.hasOwnProperty("transactionHash")) {
        setConnected("LOGIN_ACCOUNT");
        setLoader(true);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  //CRETE POST
  const CREATE_POST = async (fileURL, type, description) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.createPost(
        type,
        description,
        fileURL
      );
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      return parseErrorMsg(error);
    }
  };
  //LIKE POST
  const LIKE_POST = async (postID) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.likePost(Number(postID));
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //LIKE POST
  const UNLIKE_POST = async (postID) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.unlikePost(Number(1));
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //ADD COMMENT TO POST
  const ADD_COMMENT_POST = async (_postID, _comment) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.addComment(
        _comment,
        Number(_postID)
      );
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //FOLLOWER USER
  const FOLLOW_USER = async (address) => {
    console.log(address);
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.follow(address);
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //UNFOLLOWER USER
  const UNFOLLOW_USER = async (address) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.unfollow(address);
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //SEND MESSAGE
  const SEND_MESSAGE = async (recevier, message) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.sendMessage(recevier, message);
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE POST
  const DELETE_POST = async (_postID) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.deletePost(Number(_postID), {
        gasLimit: 300000,
      });
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //EDIT POST
  const EDIT_POST = async (postID, message) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.editPost(
        Number(postID),
        message
      );
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //GET SINGLE POST
  const GET_SINGLE_POST = async (_postID) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const getSinglePost = await SOCIAL_CONTRACT.getSinglePost(
        Number(_postID)
      );

      const _parsedSinglePost = {
        author: getSinglePost[0],
        postType: getSinglePost[1],
        postDescription: getSinglePost[2],
        postURL: getSinglePost[3],
        timeCreated: getSinglePost[4].toNumber(),
        postID: getSinglePost[5].toNumber(),
        likes: getSinglePost[6].toNumber(),
        comments: getSinglePost[7],
      };

      return _parsedSinglePost;
    } catch (error) {
      return parseErrorMsg(error);
    }
  };

  //GROUP
  //CREATE GROUP
  const CREATE_GROUP = async () => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      // const GROUP_NAME_1 = "DEFI";
      // const GROUP_DES_1 =
      //   "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ‍ ";

      // const GROUP_NAME_2 = "NFT";
      // const GROUP_DES_2 =
      //   "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ";

      const GROUP_NAME_3 = "DEVELOPER";
      const GROUP_DES_3 =
        "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ";

      // const GROUP_NAME_4 = "WEB3";
      // const GROUP_DES_4 =
      //   "The Blockchain Coders brings together organizations from across web3 to create the largest community learning blockchain education. ";

      const transaction = await SOCIAL_CONTRACT.createGroup(
        GROUP_NAME_3,
        GROUP_DES_3
      );

      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      return parseErrorMsg(error);
    }
  };

  //JOIN GROUP
  const JOIN_GROUP = async (_groupID) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();
      const account = await checkIfWalletConnected();

      const amount = 5;

      const convertAmount = ethers.utils.parseUnits(amount.toString(), "ether");

      const transferFund = await SOCIAL_CONTRACT.transferEther({
        value: convertAmount,
      });
      await transferFund.wait();

      const transaction = await SOCIAL_CONTRACT.joinGroup(Number(_groupID));
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //SEND GROUP MESSAGE
  const SEND_GROUP_MESSAGE = async (_groupID, message) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();

      const transaction = await SOCIAL_CONTRACT.sendGroupMessage(
        Number(_groupID),
        message
      );
      await transaction.wait();
      setLoader(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //GET ALL GROUP
  const GET_ALL_GROUPS = async (_groupID) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();
      const allGroups = await SOCIAL_CONTRACT.getAllGroups();

      const groups = await Promise.all(
        allGroups.map(async (groupID) => {
          const singleGroup = await SOCIAL_CONTRACT.getGroupDetails(
            groupID.toNumber()
          );
          return {
            name: singleGroup.name,
            description: singleGroup.description,
            members: singleGroup.members,
            groupID: singleGroup.groupID.toNumber(),
          };
        })
      );

      setMemberGroups(groups);
    } catch (error) {
      console.log(error);
    }
  };

  //GET GROUP MESSAGE
  const GET_GROUP_MESSAGE = async (_groupID) => {
    try {
      const SOCIAL_CONTRACT = await CALLING_CONTRACT();
      const groupMessage = await SOCIAL_CONTRACT.getGroupMessages(
        Number(_groupID)
      );
      return groupMessage;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GET_ALL_GROUPS();
  }, []);

  return (
    <SOCAIL_MEDIA_Context.Provider
      value={{
        CREATE_ACCOUNT,
        CREATE_POST,
        LIKE_POST,
        UNLIKE_POST,
        ADD_COMMENT_POST,
        READ_MESSAGE,
        SEND_MESSAGE,
        EDIT_POST,
        FOLLOW_USER,
        UNFOLLOW_USER,
        CREATE_GROUP,
        JOIN_GROUP,
        SEND_GROUP_MESSAGE,
        GET_SINGLE_POST,
        GET_GROUP_MESSAGE,
        DELETE_POST,
        connectWallet,
        //VARIABLES
        SOCIAL_MEDIA_DAPP,
        memberGroups,
        userAddress,
        connected,
        setConnected,
        AllAppPost,
        AppUsers,
        AppUserPost,
        userAccount,
        userFollowers,
        userFollowing,
        loader,
      }}
    >
      {children}
    </SOCAIL_MEDIA_Context.Provider>
  );
};
