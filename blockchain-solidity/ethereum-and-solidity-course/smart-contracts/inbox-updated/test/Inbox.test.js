const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
 
const { abi, evm } = require('../compile');
 
let accounts;
let inbox;
 
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those account to deploy the contract

  // Teaches web3 about what methods an Inbox contract has
  inbox = await new web3.eth.Contract(abi)
  // Tells web3 that we want to deploy a new copy of this contract
    .deploy({
      data: evm.bytecode.object,
      arguments: ['Hi there!'],
    })
    // Instructs web3 to send out a transaction that creates this contract
    .send({ from: accounts[0], gas: '1000000' });
});
 
describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });
  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});