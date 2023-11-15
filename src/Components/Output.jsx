import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import axios from 'axios';
import { setData } from '../Redux/action';

const Output = () => {
  const dispatch = useDispatch(); 
  const pin = useSelector((state) => state.pin);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    
    dispatch(setData(pin))
  }, []);

  return (
    <div style={{boxShadow:"0 0 10px black",padding:"15px",marginTop:"20px"}}>
      {data && (
        <div>
          <h3>Place Name: {data["place name"]}</h3>
          <h3>State: {data.state}</h3>
          <h3>Longitude: {data.longitude}</h3>
          <h3>Latitude: {data.latitude}</h3>
          
        </div>
      )}
    </div>
  );
};

export { Output };
