import Web3 from 'web3';

const ethereumUrl = 'http://127.0.0.1:9545';

const getWeb3 = async () => {
  let web3, error;
  // Most dapp browsers and metamask
  if (window.ethereum) {
    console.log('window.ethereum detected');
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (err) {
      error = err;
    }
    // Deprecated
  } else if (window.web3) {
    web3 = window.web3;
    console.log('Injected web3 detected');
    // Fallback to localhost; use dev console port by default...
  } else {
    const provider = new Web3.providers.HttpProvider(
      ethereumUrl,
    );
    web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
  }
  return (
    new Promise((resolve, reject) => {
      resolve(web3);
      reject(error);
    }));
};

export default getWeb3;
