require('dotenv').config()
const hre = require("hardhat");
const { ethers } = require("ethers");


async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  // Get LayerZero's Object from deployed contract address
  const layerZeroDemo1 = await LayerZeroDemo1.attach(
    process.env.ACC2_MUMBAI_CONTRACT_ADR
  );
  
  // Show the messagecount and message context
  const count = await layerZeroDemo1.messageCount();
  const msg = await layerZeroDemo1.message();
  console.log(count);
  console.log(ethers.utils.toUtf8String(msg));
  console.log(process.env.MUMBAI_CONTRACT_ADR);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Receive Message Command:
// npx hardhat run scripts/demo1_mumbai.js --network mumbai