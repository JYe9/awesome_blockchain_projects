const hre = require("hardhat");

async function main() {
  //STACKING
  const tokenStaking = await hre.ethers.deployContract("TokenStaking");

  await tokenStaking.waitForDeployment();

  console.log(` STACKING: ${tokenStaking.target}`);
  //TOKEN
  const theblockchaincoders = await hre.ethers.deployContract(
    "Theblockchaincoders"
  );

  await theblockchaincoders.waitForDeployment();

  console.log(` Theblockchaincoders: ${theblockchaincoders.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
