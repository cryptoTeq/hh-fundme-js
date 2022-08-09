const { getLocalChainNames } = require("../utils");

module.exports = async ({
  network,
  getNamedAccounts,
  deployments,
  getChianId,
  getUnnamedAccounts,
}) => {
  const { name: networkName } = network;
  if (!getLocalChainNames().includes(networkName)) return;

  const { deploy, log } = deployments;
  log("Deploying Mocks contract!");
  const { deployer } = await getNamedAccounts();
  const contract = await deploy("MockV3Aggregator", {
    from: deployer,
    args: [8, 100000000000],
    log: true,
    waitConfirmations: 1,
  });
  log("Mocks deployed at " + contract.address);
};
