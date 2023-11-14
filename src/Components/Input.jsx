import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPin, setData } from '../Redux/action';
import { Output } from './Output';

const Input = () => {
  const dispatch = useDispatch();
  const pin = useSelector((state) => state.pin);

 
  const submitFun = () => {
    dispatch(setPin(pin));
    dispatch(setData(pin));
  };

  return (
    <div >
      <input style={{padding:"10px", borderRadius:"15px"}} type="number" placeholder="Enter Pincode" onChange={(e) => dispatch(setPin(e.target.value))} />
      <button  style={{padding:"10px", borderRadius:"15px",marginLeft:"10px"}} onClick={submitFun}>Submit</button>
      <Output />
    </div>
  );
};

export { Input };
