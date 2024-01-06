const hre = require("hardhat");

async function main() {
  const nftsIPFS = await hre.ethers.deployContract("nftsIPFS");

  await nftsIPFS.waitForDeployment();

  console.log(` ADDRESS: ${nftsIPFS.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
