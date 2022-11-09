require('dotenv').config()
const { formatBytes32String } = require("ethers/lib/utils");
const { ethers } = require("ethers");
const hre = require("hardhat");
async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  // Connect with deployed contract address on Rinkedby
  const layerZeroDemo1 = await LayerZeroDemo1.attach(
    process.env.RINKEBY_CONTRACT_ADR
  );
  // Estimate fee of sending message
  const fees = await layerZeroDemo1.estimateFees(
    10009,
    process.env.MUMBAI_CONTRACT_ADR,
    formatBytes32String("Hello This is 7th Message"),
    false,
    []
  );
  console.log(ethers.utils.formatEther(fees[0].toString()));
  // Actually send the message (took around 1 minute to reach destination chain)
  await layerZeroDemo1.sendMsg(
    10009,
    process.env.MUMBAI_CONTRACT_ADR,
    formatBytes32String("Hello This is 7th Message"),
    { value: ethers.utils.parseEther("0.00000138368269381") }
  );
  console.log("Successfully Send the Message");
  console.log(process.env.MUMBAI_CONTRACT_ADR);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Test Message Command: 
// npx hardhat run script/demo1_testnet.js --network rinkeby