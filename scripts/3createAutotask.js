require('dotenv').config();
const { AutotaskClient } = require('defender-autotask-client');
const client = new AutotaskClient({ apiKey: process.env.DEFENDER_KEY, apiSecret: process.env.DEFENDER_SECRET });
const fs = require('fs');

const {relay} = JSON.parse(fs.readFileSync('./relay.json'))

async function run() {
  const autotask = await client.create({
    name: "Copy Vault Value",
    encodedZippedCode: await client.getEncodedZippedCodeFromFolder('./autotasks'),
    relayerId: relay.relayerId, 
    trigger: {
      type: 'webhook'
    },
    paused: false
  })
  fs.writeFileSync('autotask.json', JSON.stringify({
    autotask
  }, null, 2));
  console.log("Autotask created with ID ", autotask.autotaskId)
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
