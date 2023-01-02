require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [GOERLI_PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            accounts: [
                "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
            ],
            chainId: 31337
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
      enabled: true,
      outputFile: "gas-reporter.txt",
      noColors: true,
      currency: "USD",
      coinmarketcap: COINMARKET_API_KEY
    }
}
