require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia:{
      url:"https://sepolia.infura.io/v3/9cf1431f1e194227b3588dc0e48db967",
      accounts:["738291ed8b4ad7c70eaab83a3f5d4520b0dc8207e71f9f2b24001396f80d524a"],
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
