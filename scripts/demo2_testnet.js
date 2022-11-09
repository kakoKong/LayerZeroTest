require('dotenv').config()
const hre = require("hardhat");
const { ethers } = require("ethers");


async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  // Get LayerZero's Object from deployed contract address
  const layerZeroDemo1 = await LayerZeroDemo1.attach(
    process.env.RINKEBY_CONTRACT
  );
  
  // Show the messagecount and message context
  const count = await layerZeroDemo1.messageCount();
  const msg = await layerZeroDemo1.message();
  console.log(count);
  console.log(ethers.utils.toUtf8String(msg));
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Receive Message Command:
// npx hardhat run scripts/demo1_testnet.js --network rinkeby