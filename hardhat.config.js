require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require('@openzeppelin/hardhat-defender');
require('dotenv').config();

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: `${process.env.ALCHEMY_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    } 
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  },
  defender: 
  {
    "apiKey": process.env.DEFENDER_KEY,
    "apiSecret": process.env.DEFENDER_SECRET
  }
  
};
