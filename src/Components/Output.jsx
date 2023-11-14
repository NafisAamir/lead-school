import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import axios from 'axios';
import { setData } from '../Redux/action';

const Output = () => {
  const dispatch = useDispatch(); // Initialize useDispatch
  const pin = useSelector((state) => state.pin);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    // const fetchData = async () => {
    //   if (pin) {
    //     try {
    //       const response = await axios.get(`https://api.zippopotam.us/in/${pin}`);
    //       console.log(response.data);
    //       // Dispatch the action to set the data in the Redux store
    //       dispatch({ type: 'SET_DATA', payload: response.data.places[0] });
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   }
    // };

    // fetchData();
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
          
          

          {/* Add other data properties as needed */}
        </div>
      )}
    </div>
  );
};

export { Output };
