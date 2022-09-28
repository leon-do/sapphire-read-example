require("dotenv").config();
const { ethers } = require("ethers");
const sapphire = require("@oasisprotocol/sapphire-paratime");

main();
async function main() {
  const provider = sapphire.wrap(new ethers.providers.JsonRpcProvider(sapphire.NETWORKS.testnet.defaultGateway));

  // prettier-ignore
  const abi = [ { "inputs": [], "name": "myMeta", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true } ]
  const contractAddress = "0x48594e6f18BcB8fdB50Be8B5e7678cbA4A1262A7";

  // wrap this?
  const contract = new ethers.Contract(contractAddress, abi, provider);

  try {
    const myMeta = await contract["myMeta"]();
    console.log(myMeta);
  } catch (e) {
    console.error(e);
  }
}
