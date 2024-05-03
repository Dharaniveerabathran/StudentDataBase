require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    hardhat:{},
    sepolia:{
      url:"https://sepolia.infura.io/v3/78a7b3c4e93344878526050156e71a8a",
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
