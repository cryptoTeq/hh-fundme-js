require("@nomicfoundation/hardhat-toolbox");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-deploy");

const RINKEBY_PRIVATE_KEY =
  "ae29ba35eb71a26f3741d6079436da916d15f75a5813cb9d27cb37ae730cc1a9";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: { compilers: [{ version: "0.8.9" }, { version: "0.6.6" }] },
  gasReporter: {
    enabled: true,
    token: "ETH",
    currency: "USD",
    coinmarketcap: "4b4bba89-0428-438e-8f6f-e9b5c0bc40a4",
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/Y-IbWAqM4rTEYX8pDRXyHcjJ_RLQZPM5`,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: 0, // refers to the fist account in networks.goerli
  },
};
