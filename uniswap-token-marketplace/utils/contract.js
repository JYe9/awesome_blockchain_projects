import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      address,
      CustomTokenABI.abi,
      signer
    );

    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    // new poly= 0xdFBD5Df22D049D743c557D7CFf1Ff28a63CB7039
    const contractReader = new ethers.Contract(
      "0xdFBD5Df22D049D743c557D7CFf1Ff28a63CB7039",
      CustomDexABI.abi,
      signer
    );
    // const contractReader = new ethers.Contract(
    //   '0xAd235275eaC38C61725Eed38757a7965188EAa36',
    //   CustomDexABI.abi,
    //   signer,
    // )

    return contractReader;
  }
};
