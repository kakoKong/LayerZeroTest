require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/51b1b37ef67a403b9914859668d196c0", //Infura url with projectId
      accounts: ["33ae181325328f9bfc1cefc03d794b42a9a6f35bd63cfef7d52ff556bbd48dcc"] // add the account that will deploy the contract (private key)
     },
     mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/YkRNRMoUPg7uZfVdwf4WnVT7MpWtMuuD",
      accounts: ["a71961e32e14528bb84109a09266c0fbec763b918756c59a55f9ccc4a1931afb"],
     }
   }
};
