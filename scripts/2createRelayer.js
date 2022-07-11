require('dotenv').config();
const { RelayClient } = require('defender-relay-client');
const relayClient = new RelayClient({ apiKey: process.env.DEFENDER_KEY, apiSecret: process.env.DEFENDER_SECRET });
const { writeFileSync } = require('fs');

async function createRelayer() {
  const requestParams = {
    name: 'Demo Relayer',
    network: 'rinkeby',
    minBalance: BigInt(1e17).toString(),
  };
  const relay = await relayClient.create(requestParams);
  
  console.log(relay) 
  writeFileSync('relay.json', JSON.stringify({
    relay
  }, null, 2));

}

createRelayer().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});