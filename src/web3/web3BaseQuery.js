import { CALL, SEND } from '../constants';
import getWeb3 from './getWeb3';

// CONSOLE.LOG ALL DAY EVERY DAY
const classInstanceToObject = (instance) => {
  if (instance === null || instance === undefined) {
    return instance;
  }
  const { ...obj } = instance;
  return obj;
};

const objectToFunctionParams = (instance, method, params) => {
  console.log('in object to function params');
  console.log(instance.methods);
  console.log(method);
  if (params === null || params === undefined) {
    return instance.methods[method]();
  }
  return instance.methods[method](...Object.values(params));
};

const web3BaseQuery = () => async ({
  contract, method, action, params,
}) => {
  try {
    let web3;
    try {
      const result = await getWeb3();
      web3 = result.web3;
      // console.log(web3);
    } catch (error) {
      return { error };
    }

    // console.log('b4 accts');
    const accounts = await web3.eth.getAccounts();
    // console.log('aft accts');
    // console.log(accounts);
    const networkId = await web3.eth.net.getId();
    // console.log('aft network id');
    // console.log(networkId);
    const deployedNetwork = contract.networks[networkId];
    // console.log('aft deployed');
    const instance = new web3.eth.Contract(
      contract.abi,
      deployedNetwork && deployedNetwork.address,
    );
    // console.log('aft instance');
    // console.log(instance);

    // console.log('b4 switch');
    const methodForTx = objectToFunctionParams(instance, method, params);
    // Contract return is of type Result, convert to serialisable object
    switch (action) {
      case CALL: {
        const response = await methodForTx.call({ from: accounts[0] });
        return { data: classInstanceToObject(response) };
      }
      case SEND: {
        // console.log('in send');
        // console.log(accounts[0]);
        // console.log(instance);
        // const gas = await instance.methods[method](...Object.values(params)).estimateGas({ from: accounts[0] });
        // console.log('gas', gas);
        // console.log('calling send');
        // console.log('method', method);
        // console.log('params obj', params);
        // console.log('params spread', ...Object.values(params));
        // console.log('calling method', instance.methods[method](...Object.values(params)));
        const response = await methodForTx.send({
          from: accounts[0],
          gasPrice: '20000000000',
          gas: '1000000',
        });
        return { data: classInstanceToObject(response) };
      }
      default:
        return { error: 'Action not recognised: you can only use CALL and SEND' };
    }
  } catch (error) {
    console.log(error);
    console.log(classInstanceToObject(error));
    // Need to catch all here to be effective. Issues so far:
    // 1. A string in front of the error message
    // 2. A Class instance as the error message

    // TODO: fix this eventually. For now log

    // const { message } = JSON.parse(error.message.substring(15).trim());
    // console.log('message in web3 query');
    // console.log(message);
    // SO suggested for contract-specific error message
    // const message = JSON.parse(error.message.substring(56).trim().replace('\'', '')).value.data.data;
    return { error: String(error) };
  }
};

export default web3BaseQuery;
