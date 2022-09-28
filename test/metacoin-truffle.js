const MetaCoin = artifacts.require("MetaCoin");

async function exerciseContract() {
  const mc = await MetaCoin.deployed();
  const myMeta = await mc.myMeta();
  console.log("uint256 public myMeta should equal", myMeta.toString()); // prints 123 which is good
}

module.exports = async function (callback) {
  try {
    await exerciseContract();
  } catch (e) {
    console.error(e);
  }
  callback();
};