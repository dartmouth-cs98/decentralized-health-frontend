// https://stackoverflow.com/questions/34699529/convert-javascript-class-instance-to-plain-object-preserving-methods
import { CALL, SEND } from '../constants';
import getWeb3 from './getWeb3';

const classInstanceToObject = (instance) => {
  const { ...obj } = instance;
  return obj;
};

const web3BaseQuery = (contract) => async ({ method, action, params }) => {
  try {
    let web3;
    try {
      web3 = await getWeb3();
      console.log(web3);
    } catch (error) {
      console.log(error);
      return { error };
    }
    console.log('aft web3');
    console.log('before accounts');
    web3.eth.getAccounts((err, res) => {
      console.log('err');
      console.log(err);
      console.log(res);
    });
    const accounts = await web3.eth.getAccounts();
    console.log('aft accts');
    const networkId = await web3.eth.net.getId();
    console.log('aft networkid');
    const deployedNetwork = contract.contract.networks[networkId];
    console.log('aft deployed');
    const instance = new web3.eth.Contract(
      contract.contract.abi,
      deployedNetwork && deployedNetwork.address,
    );
    // instance is what we can use to call methods
    // accounts is for mutations only
    console.log('b4 switch');
    switch (action) {
      case CALL: {
        console.log('querying');
        const response = await instance.methods[method]().call();
        console.log('response');
        console.log(response);
        console.log(typeof response);
        console.log(classInstanceToObject(response));
        return { data: classInstanceToObject(response) };
      }
      case SEND: {
        console.log('mutating');
        const response = await instance.methods[method](...Object.values(params)).send({ from: accounts[0] });
        return { data: classInstanceToObject(response) };
      }
      default:
        return { error: 'Action not recognised: you can only use CALL and SEND' };
    }
  } catch (error) {
    console.log(error);
    const { message } = JSON.parse(error.message.substring(15).trim());
    // SO suggested for contract-specific error message
    // const message = JSON.parse(error.message.substring(56).trim().replace('\'', '')).value.data.data;
    return { error: message };
  }
};

export default web3BaseQuery;
