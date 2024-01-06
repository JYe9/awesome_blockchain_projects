const hre = require("hardhat");

async function main() {
  const CustomDex = await hre.ethers.getContractFactory("CustomDex");
  const customDex = await CustomDex.deploy();

  await customDex.deployed();
  console.log(` CustomDex: ${customDex.address}`);
}
//0xB661e0Bb5bDf4490176532247a409fDbA8cB58d9

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
