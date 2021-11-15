// import Web3 from 'web3';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';

// const localhost = 'http://127.0.0.1:9545';
const alchemyUrl = process.env.REACT_APP_API_URL;

// TO BE FINETUNED
export const connectToMetamask = async (web3) => {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = web3.eth.getAccounts();
    console.log(accounts);
    return accounts[0];
  } catch (err) {
    return err;
  }
};

export const getWeb3 = async () => {
  let web3, error;

  if (window.ethereum) {
    web3 = createAlchemyWeb3(alchemyUrl);
    try {
      await connectToMetamask(web3);
      // await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3.eth.handleRevert = true;
    } catch (err) {
      error = err;
      console.log(error);
    }
  }
  return (
    // DO WE NEED THIS?
    new Promise((resolve, reject) => {
      resolve(web3);
      reject(error);
    }));
};

// const getWeb3 = async () => {
//   let web3, error;
//   // Most dapp browsers and metamask
//   if (window.ethereum) {
//     console.log('window.ethereum detected');
//     // web3 = new Web3(window.ethereum);
//     web3 = new Web3(new Web3.providers.HttpProvider(
//       alchemyUrl,
//     ));
//     try {
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       console.log(await web3.eth.getAccounts());
//     } catch (err) {
//       error = err;
//     }
//     // Deprecated
//   } else if (window.web3) {
//     web3 = window.web3;
//     console.log('Injected web3 detected');
//     // Fallback to localhost; use dev console port by default...
//   } else {
//     const provider = new Web3.providers.HttpProvider(
//       alchemyUrl,
//     );
//     web3 = new Web3(provider);
//     console.log('No web3 instance injected, using Local web3.');
//   }
//   return (
//     new Promise((resolve, reject) => {
//       resolve(web3);
//       reject(error);
//     }));
// };
