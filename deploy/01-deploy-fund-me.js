const { getPriceFeedAddress, getLocalChainNames } = require("../utils");

module.exports = async function (params) {
  const {
    network,
    getNamedAccounts,
    deployments,
    getChianId,
    getUnnamedAccounts,
  } = params;
  const { deploy, log, get } = deployments;
  log("Deploying FunMe contract!");
  const { name: networkName } = network;
  let priceFeedAddress;
  if (getLocalChainNames().includes(networkName)) {
    priceFeedAddress = (await get("MockV3Aggregator")).address;
  } else {
    priceFeedAddress = getPriceFeedAddress(networkName);
    if (!priceFeedAddress) return Promise.reject();
  }
  const { deployer } = await getNamedAccounts();
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [priceFeedAddress],
    log: true,
    waitConfirmations: 1,
  });
  log("FundMe deployed at " + fundMe.address);
};
