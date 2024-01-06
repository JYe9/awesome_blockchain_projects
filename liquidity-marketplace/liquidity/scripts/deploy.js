const hre = require("hardhat");

const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  //WOOX TOKEN
  const _initialSupply = tokens(500000000000);
  const Woox = await hre.ethers.getContractFactory("Woox");
  const woox = await Woox.deploy(_initialSupply);

  await woox.deployed();
  console.log(` Woox: ${woox.address}`);

  //ICO WOOX
  const _tokenPrice = tokens(0.0001);
  const ICOWoox = await hre.ethers.getContractFactory("ICOWoox");
  const icoWoox = await ICOWoox.deploy(woox.address, _tokenPrice);

  await icoWoox.deployed();
  console.log(` ICOWoox: ${icoWoox.address}`);

  //LIQUIDITY
  const Liqudity = await hre.ethers.getContractFactory("Liqudity");
  const liqudity = await Liqudity.deploy();

  await liqudity.deployed();
  console.log(` Liqudity: ${liqudity.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
