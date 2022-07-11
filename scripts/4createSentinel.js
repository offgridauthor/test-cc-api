require('dotenv').config();
const { SentinelClient } = require('defender-sentinel-client');
const creds = { apiKey: process.env.DEFENDER_KEY, apiSecret: process.env.DEFENDER_SECRET };
const client = new SentinelClient(creds);
const fs = require('fs');

const vaultAbi = JSON.parse(fs.readFileSync('artifacts/contracts/NumberVault.sol/NumberVault.json'));


async function run() {

  const requestParams = {
    type: 'BLOCK',
    network: 'rinkeby',
    name: 'NumberVault Value Change Event',
    address: '0x085C0307cE34d9Ae27772265E07AA28643f37077', // -- NumberVault address
    abi: vaultAbi, 
    eventConditions: [ 
      { eventSignature: 'NumberStored(uint256)' }], 
    autotaskTrigger: undefined, //-- the autotask just created
  }

  await client.create(requestParams);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
