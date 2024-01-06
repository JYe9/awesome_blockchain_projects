/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY =
  "f2211d726b37710b750fa80da41f73172853fa2ac82181aca2ff4233e3c6ce9f";
const RPC_URL = "https://rpc.ankr.com/polygon_mumbai";
module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
