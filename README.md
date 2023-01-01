# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
This contract shows how to deploy solidity contracts on different networks (hardhat being the default network) using hardhat.
```shell
yarn hardhat run scipts/deploy.js --network <network name>
```
It also shows how to programmatically verify contract on etherscan using `@nomiclabs/hardhat-etherscan` plugin and etherscan api key.
```shell
yarn hardhat verify
OR
npx hardhat verify 
```
It also shows how to implement custom hardhat task.
```shell
yarn hardhat <task name> 
OR
npx hardhat <task name> 
```