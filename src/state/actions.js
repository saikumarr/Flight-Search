import { fetch } from "cross-fetch";
export const FETCH_FLIGHTS = "FETCH_FLIGHTS";

export const getFlights = (data) => {
  return {
    type: FETCH_FLIGHTS,
    flights: data,
  };
};

export const fetchFlights = (fromCity, toCity, travelDate) => {
  console.log("In Fetch Flights");
  return (dispatch) => {
    fetch(
      `http://localhost:3001/fetchFlights?source=${fromCity}&destination=${toCity}&travelDate=${travelDate}`
    )
      .then((response) => response.json())
      .then((json) => {
          if(json.length > 0){
              dispatch(getFlights(json));
            }
            else{
                dispatch(getFlights('No Flights Found!!!'))
            }
              
      })
  };
};
