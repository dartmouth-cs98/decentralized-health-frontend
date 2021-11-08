import React, { useEffect, useState } from 'react';
import { useGetQuery, usePutMutation } from './contractApi';

const ContractTest = () => {
  const [addVal, opts] = usePutMutation();
  const result = useGetQuery();
  const [doctor, setDoctor] = useState({ 0: '', 1: 'name' });

  useEffect(() => {
    try {
      if (result.data) {
        console.log('result');
        console.log(result);
        console.log(result.data);
        setDoctor(result.data);
      }
    } catch (error) {
      console.log(`our hook failed with error: ${error}`);
    }
  });

  const handleClick = async (e) => {
    try {
      console.log('clicked');
      await addVal({ name: 'Doctor John', clinic: 'John\'s clinic' }).unwrap();
      console.log(opts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>hi</p>
      <button onClick={handleClick} type="button">add doctor</button>
      <p>{doctor[0]}</p>
      <p>Doctor John</p>
    </div>
  );
};

export default ContractTest;
