const sdk = require("@terminal-packages/sdk");
const Web3 = require("web3");

const web3 = new Web3(
  new sdk.TerminalHttpProvider({
    host: "http://localhost:8545",
    apiKey: "IYFLu2akdq6D4WhIqhZVVw==",
    projectId: "ryAqzgjMRZoJWnxv",
    source: "Ganache"
  })
);

web3.eth.getBlockNumber().then(console.log);

const sendTx = async () => {
  const accounts = await web3.eth.getAccounts();

  web3.eth
    .sendTransaction({
      from: accounts[0],
      to: "0xeC1FEF973021d2eF6C4bC709b6f3eb1b4bbaB3aD",
      value: "100",
      gas: "50000"
    })
    .on("receipt", r => {
      console.log(r);
    });
};

sendTx();

/*
web3.eth
  .sendTransaction({
    from: "0x594e25Bbc8d95c0b16a64b11CbC1FBc2923A14a9",
    to: "0xeC1FEF973021d2eF6C4bC709b6f3eb1b4bbaB3aD",
    value: "100",
    gas: "200000"
  })
  .then(console.log);

  .then(r =>
    web3.eth.sendTransaction(r.rawTransaction).on("receipt", r => {
      console.log(r);
    })
  );

*/
