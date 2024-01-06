async function initialize() {
  let gasEstimation;

  const contractOwner = document.getElementById("contractOwner").value;
  const tokenAddress = document.getElementById("tokenAddress").value;
  const apyRate = document.getElementById("apyRate").value;
  const minimumStakingAmount = document.getElementById(
    "minimumStakingAmount"
  ).value;
  const maxStakeTokenLimit =
    document.getElementById("maxStakeTokenLimit").value;
  const stakeStartDate = document.getElementById("stakeStartDate").value;
  const stakeEndDate = document.getElementById("stakeEndDate").value;
  const stakeDays = document.getElementById("stakeDays").value;
  const earlyUnstakeFeePercentage = document.getElementById(
    "earlyUnstakeFeePercentage"
  ).value;

  console.log(contractOwner, tokenAddress);

  // if (
  //   !contractOwner &&
  //   !tokenAddress &&
  //   !apyRate &&
  //   !minimumStakingAmount &&
  //   !maxStakeTokenLimit &&
  //   !stakeStartDate &&
  //   !stakeEndDate &&
  //   !stakeDays &&
  //   !earlyUnstakeFeePercentage
  // )
  //   return console.log("Please provide data");

  let cObj = new web3Main.eth.Contract(
    SELECT_CONTRACT[_NETWORK_ID].STACKING.abi,
    "0x0915a691559898a03366F76c47e70e674f38A032"
  );
  console.log(cObj);

  const mixToken = addDecimal(minimumStakingAmount, 18);
  const maxToken = addDecimal(maxStakeTokenLimit, 18);

  try {
    gasEstimation = await cObj.methods
      .initialize(
        contractOwner,
        tokenAddress,
        apyRate * 1,
        mixToken,
        maxToken,
        stakeStartDate * 1,
        stakeEndDate * 1,
        stakeDays * 1,
        earlyUnstakeFeePercentage * 1
      )
      .estimateGas({
        from: currentAddress,
      });
    console.log(gasEstimation);
  } catch (error) {
    console.log(error);
    notyf.error(formatEthErrorMsg(error));
    return;
  }

  cObj.methods
    .initialize(
      contractOwner,
      tokenAddress,
      apyRate * 1,
      mixToken,
      maxToken,
      stakeStartDate * 1,
      stakeEndDate * 1,
      stakeDays * 1,
      earlyUnstakeFeePercentage * 1
    )
    .send({
      from: currentAddress,
      gas: gasEstimation,
    })
    .on("transactionHash", (hash) => {
      console.log("Transaction Hash: ", hash);
    })
    .on("receipt", (receipt) => {
      console.log(receipt);
    })
    .catch((error) => {
      console.log(error);
      notyf.error(formatEthErrorMsg(error));
      return;
    });
}
