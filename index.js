const sdk = require("@terminal-packages/sdk");
const Web3 = require("web3");
const abi = require("./abi");

const web3 = new Web3(
  new sdk.TerminalHttpProvider({
    host: "https://kovan.infura.io/v3/1c3acca035dd41dfbf400abac71e59a7",
    apiKey: "IYFLu2akdq6D4WhIqhZVVw==",
    projectId: "ryAqzgjMRZoJWnxv",
    source: sdk.SourceType.Infura
  })
);

const contract = new web3.eth.Contract(
  abi,
  "0x330F219BA329b5681E5b27F6BEcfd50600845DC7"
);
try {
  contract.methods
    .getVals("200", "300")
    .call()
    .then(console.log);
} catch (e) {
  console.log(e);
}
