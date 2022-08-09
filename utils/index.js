module.exports.getPriceFeedAddress = (networkName) => {
  const priceFeeds = {
    rinkeby: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
  };
  return priceFeeds[networkName] || null;
};

module.exports.getLocalChainNames = () => ["local", "localhost", "hardhat"];
