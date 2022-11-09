require('dotenv').config()
const { formatBytes32String } = require("ethers/lib/utils");
const { ethers } = require("ethers");
const hre = require("hardhat");
async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  // Connect with deployed contract address on MUMBAI
  const layerZeroDemo1 = await LayerZeroDemo1.attach(
    process.env.MUMBAI_CONTRACT
  );
  // Estimate fee of sending message
  const fees = await layerZeroDemo1.estimateFees(
    10009,
    process.env.RINKEBY_CONTRACT,
    formatBytes32String("Message from Mumbai to Rikeby"),
    false,
    []
  );
  console.log(ethers.utils.formatEther(fees[0].toString()));
  // Actually send the message (took around 1 minute to reach destination chain)
  await layerZeroDemo1.sendMsg(
    10009,
    process.env.RINKEBY_CONTRACT,
    formatBytes32String("Message from Mumbai to Rikeby"),
    { value: ethers.utils.parseUnits("18", 3)}
  );
  console.log("Successfully Send the Message");
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Test Message Command: 
// npx hardhat run script/demo2_mumbai.js --network mumbai