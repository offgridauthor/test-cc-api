const { DefenderRelaySigner, DefenderRelayProvider } = require('defender-relay-client/lib/ethers');
const ethers = require('ethers');

const {NumberVault, VaultCopycat} = require('../deploy.json');
const {abi} = require('../artifacts/contracts/VaultCopycat.sol/VaultCopycat.json')

exports.handler = async function(event) {
  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, { speed: 'fast' });
  const copycat = new ethers.Contract(VaultCopycat, abi, signer);
  const payload = event.request.body;
  const matchReasons = payload.matchReasons;
  console.log(matchReasons)
//  const newNumber = matchReasons[0].params._num;
//  copycat.storeNum(newNumber)
};


