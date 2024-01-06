const hre = require("hardhat");

async function main() {
  const socialMediaDapp = await hre.ethers.deployContract("SocialMediaDapp");

  await socialMediaDapp.waitForDeployment();

  console.log(` SocialMediaDapp: ${socialMediaDapp.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
