import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR, WeatherAction } from "../../../../weather-app/src/types";

export const getWether = (city:string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        
        if(!res.ok){
            const resData: WeatherError = await res.json();
            throw new Error(resData.message);
        }
        const resData: WeatherData = await res.json();
        dispatch({
            type: GET_WEATHER,
            payload: resData
        });

        }catch (err) {
  let errorMessage = "An unknown error occurred";

  if (err instanceof Error) {
    errorMessage = err.message;
  }

  dispatch({
    type: SET_ERROR,
    payload: errorMessage,
  });
}
    }
}

export const setLoading = (): WeatherAction => {
    return{
        type: SET_LOADING
    }

}

export const setError = (): WeatherAction => {
return{
    type: SET_ERROR,
    payload:''
}
}