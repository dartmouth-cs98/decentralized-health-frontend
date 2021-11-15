import { CALL, SEND } from '../constants';
import { getWeb3 } from './getWeb3';

// CONSOLE.LOG ALL DAY EVERY DAY
const classInstanceToObject = (instance) => {
  if (instance === null || instance === undefined) {
    return instance;
  }
  const { ...obj } = instance;
  return obj;
};

const web3BaseQuery = () => async ({
  contract, method, action, params,
}) => {
  try {
    let web3;
    try {
      web3 = await getWeb3();
      console.log(web3);
    } catch (error) {
      return { error };
    }

    console.log('b4 accts');
    const accounts = await web3.eth.getAccounts();
    console.log('aft accts');
    console.log(accounts);
    const networkId = await web3.eth.net.getId();
    console.log('aft network id');
    console.log(networkId);
    const deployedNetwork = contract.networks[networkId];
    console.log('aft deployed');
    const instance = new web3.eth.Contract(
      contract.abi,
      deployedNetwork && deployedNetwork.address,
    );
    console.log('aft instance');
    console.log(instance);

    console.log('b4 switch');
    // Contract return is of type Result, convert to serialisable object
    console.log('ccaling web3basequery', instance.methods[method].String);
    switch (action) {
      case CALL: {
        // signupPatient(string memory _name, uint8 _age)
        // const response = await instance.methods.getPatientInfo().call({ from: accounts[0] });

        const response = await instance.methods.signupDoctor('Elorm', '43').call({ from: accounts[0] });
        console.log('In CALL', response);
        return { data: classInstanceToObject(response) };
      }
      case SEND: {
        const response = await instance.methods[method](...Object.values(params)).send({ from: accounts[0] });
        console.log('In SEND', response);
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
