require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const AVALANCHE_TEST_PRIVATE_KEY = "ACCOUNTS";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    fuji: {
      url: 'https://cosmological-wider-night.avalanche-testnet.discover.quiknode.pro/38957daf06427551bc9f57a154c0f888ef6f3071/ext/bc/C/rpc',
      accounts: ["YOUR PRIVATE KEY HERE"],
      chainId: 43113,

    },


  }
};
