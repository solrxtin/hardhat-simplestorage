// Imports
const { ethers, run, network } = require("hardhat");
require("@nomiclabs/hardhat-etherscan")

async function main() {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract");
  // This sends it to the mempool
  const simpleStorage = await simpleStorageFactory.deploy();
  const contractAddress = simpleStorage.address
  console.log(`Deploying contract to : ${contractAddress}`)
  // Make sure it gets mined
  await simpleStorage.deployed()
  if (network.config.chainId===5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for 6 block confirmations before verifying contract");
    await simpleStorage.deployTransaction.wait(6);
    await verify(contractAddress, []);
  }
  // Interacting with contract using hardhat
  const currentValue = await simpleStorage.retrieve();
  console.log(`The current value is: ${currentValue.toString()}`);
  // Storing a new value
  const transcationResp = await simpleStorage.store("7");
  await transcationResp.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`The updated value is: ${updatedValue.toString()}`)
}

async function verify(contractAddress, args) {
  console.log("Verifying contract")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args
    })
  } catch(e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified")
    } else {
      console.error(e)
    }
  }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch( err => {
    console.error(err);
    process.exit(1);
});


