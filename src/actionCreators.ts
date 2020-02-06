import * as ActionTypes from './types/actions';
import { Actions } from './constants';
import { LuasStopsApiResponse, LuasStation } from './types';

export function createFetchLuasStopsInitAction(): ActionTypes.FetchLuasStopsInitAction {
  return {
    type: Actions.FETCH_LUAS_STOPS_INIT
  };
}

export function createFetchLuasStopsSuccessAction(luasStops: LuasStopsApiResponse): ActionTypes.FetchLuasStopsSuccessAction {
  return {
    type: Actions.FETCH_LUAS_STOPS_SUCCESS,
    payload: luasStops,
  };
}

export function createFetchLuasStopsErrorAction(error: Error): ActionTypes.FetchLuasStopsErrorAction {
  return {
    type: Actions.FETCH_LUAS_STOPS_ERROR,
    error,
  };
}

export function setNearestLuasStation(station: LuasStation): ActionTypes.SetNearestLuasStationAction {
  return {
    type: Actions.SET_NEAREST_LUAS_STATION,
    station,
  }
}