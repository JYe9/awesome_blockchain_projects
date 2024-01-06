const hre = require("hardhat");

const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  //TheBlockchainCoders
  const _initialSupply = tokens(5000000);

  const TheBlockchainCoders = await hre.ethers.getContractFactory(
    "TheBlockchainCoders"
  );
  const theBlockchainCoders = await TheBlockchainCoders.deploy(_initialSupply);

  await theBlockchainCoders.deployed();
  console.log(` TheBlockchainCoders: ${theBlockchainCoders.address}`);

  //TOTEN SALE

  const _tokenPrice = tokens(1);

  const TokenSale = await hre.ethers.getContractFactory("TokenSale");
  const tokenSale = await TokenSale.deploy(
    theBlockchainCoders.address,
    _tokenPrice
  );

  await tokenSale.deployed();
  console.log(` TokenSale: ${tokenSale.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
