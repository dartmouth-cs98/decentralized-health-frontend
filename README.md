# MED 3.0
Decentralised health.

## Authors:
- Chibuzo Chiwike
- Elorm Coch

## HOW DO I GET STARTED HERE
Run `npm install`, then `npm start` to start your development server

## HOW DO YOU TALK WITH THE BLOCKCHAIN
This project uses Redux Toolkit Query. The default fetchBaseQuery is replaced with a custom web3BaseQuery. This is not fully tested yet, and is a little error prone. Be generous with console.log when developing. The communication is done with a library called web3.js. RTK Query supplies us with hooks that encompass the data fetching lifecycle, and so we do not need to plug into React's own lifecycle using UseEffect.

## WORKING WITH THE BACKEND, THE BLOCKCHAIN, AND THE FRONTEND
You should clone all repos in the same directory. You will also need at least three tabs open in your terminal.

### Set up the backend
Clone the backend, follow the readme to set it up

### Set up the blockchain
1. Clone the blockchain. Run `truffle develop`. You should see a list of accounts and private keys. Copy any of the private keys.
2. Run `compile`, followed by `migrate`
3. Download the metamask chrome extension. Set it up. Click on 'Import Account' and paste the private key you copied. You should have approximately 99 ETH in that account. This is the account you will use in development.

### Set up the frontend
See the section above for getting started

If you have any problems during set up, please see the section below on reasons why your project might be breaking.

### Things to keep in mind:
The API_URL constant in 'src/constants.js' indicates which url your backend API is hosted on. Use localhost for development.

## WHY IS MY PROJECT BREAKING (lessons learned the hard way)
1. I encountered an error of type "the tx doesn't have the correct nonce" with Metamask.
   - You may have recently recompiled and or restarted your test network. Reset your test account on metamask and your transaction should go through. See more [here](https://www.moesif.com/blog/blockchain/ethereum/Common-Problems-Developing-Ethereum-DApps-With-Metamask/)
2. I have 2000 metamask transactions, 20 000 console messages, and half as many errors. What is this?
   - You may be attempting to call a transaction from UseEffect without an empty array as the second parameter. First stop your development server, close the browser tab, and batch reject all metamask transactions (this might take a while, but it will finish eventually). Add the empty array, and carry on.
3. I'm seeing this error: err: insufficient funds for gas * price + value, with an extremely high result. I can't possibly acquire that much ether.
   - Initial research fails to fully clarify the reason for this, however, specifying gas and gasPrice parameters for the transaction appears to solve this.
4. Execution reverted. Who do I blame?
   - Execution reverted means the contract rejected your transaction. To help with debugging, add a second paramteer to all solidity require statments. This paramter is a string that will be shown when the execution is reverted, and can help pinpoint the source of the error.
5. I'm not sure why everything is breaking.
   - While this section will be kept updated as more issues are discovered, stackoverflow, reddit, and discord are some places you can go to find more answers. Redploying the contract should be a last attempt, especially if the solidity tests are passing, as it produces a new address and all previous data is no longer connected to the dapp (you can still access it on etherscan, as blockchain data never goes away). Instead, debug web3. This project centralises all web3 calls in getWeb3 and web3BaseQuery, so work there to debug.