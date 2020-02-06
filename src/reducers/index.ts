import { Actions } from '../constants';
import { ActionTypes, RootState } from '../types';

const getInitialState = (): RootState => ({
  luas: {
    stations: [],
    nearestStation: undefined,
  },
});


export default (state: RootState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case Actions.FETCH_LUAS_STOPS_SUCCESS:
      return {
        ...state,
        luas: {
          ...state.luas,
          stations: action.payload.stations,
        },
      };
    case Actions.SET_NEAREST_LUAS_STATION:
      return {
        ...state,
        luas: {
          ...state.luas,
          nearestStation: action.station,
        },
      };
  }
  return state;
}