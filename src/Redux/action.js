import axios from "axios";

export const setPin = (pin) => ({
  type: 'SET_PIN',
  payload: pin,
});

export const setData = (pin) => {
  return (dispatch) => {
    if(pin){
      try {
        axios.get(`https://api.zippopotam.us/in/${pin}`)
          .then((res) => {
            dispatch({
              type: 'SET_DATA',
              payload: res.data.places[0],
            });
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              alert(`Invalid Pin :${pin}`)
              console.error(`Data not found for pin: ${pin}`);
            } else {
              console.error("Error fetching data:", error);
            }
          });
      } catch (error) {
        console.error("Error in try block:", error);
      }
    };
    }
    
};
