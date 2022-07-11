const hre = require("hardhat");
const { writeFileSync } = require('fs');

async function main() {
  const Vault = await hre.ethers.getContractFactory("NumberVault");
  const vault = await Vault.deploy();
  await vault.deployed();
  console.log("Number Vault deployed to:", vault.address);

  const Copycat = await hre.ethers.getContractFactory("VaultCopycat");
  const copycat = await Copycat.deploy();
  await copycat.deployed();
  console.log("Copycat deployed to:", copycat.address);

  writeFileSync('deploy.json', JSON.stringify({
    NumberVault: vault.address,
    VaultCopycat: copycat.address,
  }, null, 2));
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
