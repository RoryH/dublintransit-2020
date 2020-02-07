import { Action } from 'redux';
import { Actions } from '../constants';
import { LuasStopsApiResponse, LuasStation, LuasStopTimesApiResponse } from './api-data';

export type FetchLuasStopsInitAction = Action<Actions.FETCH_LUAS_STOPS_INIT>;

export interface FetchLuasStopsSuccessAction extends Action<Actions.FETCH_LUAS_STOPS_SUCCESS> {
  payload: LuasStopsApiResponse;
}

export interface FetchLuasStopsErrorAction extends Action<Actions.FETCH_LUAS_STOPS_ERROR> {
  error: Error;
}

export type FetchLuasStopTimesInitAction = Action<Actions.FETCH_LUAS_STOP_TIMES_INIT>;

export interface FetchLuasStopTimesSuccessAction extends Action<Actions.FETCH_LUAS_STOP_TIMES_SUCCESS> {
  payload: LuasStopTimesApiResponse;
}

export interface FetchLuasStopTimesErrorAction extends Action<Actions.FETCH_LUAS_STOP_TIMES_ERROR> {
  error: Error;
}

export interface SetNearestLuasStationAction extends Action<Actions.SET_NEAREST_LUAS_STATION> {
  station: LuasStation;
}

export type ActionTypes =
  FetchLuasStopsInitAction
  | FetchLuasStopsSuccessAction
  | FetchLuasStopsErrorAction
  | SetNearestLuasStationAction
  | FetchLuasStopTimesSuccessAction
  | FetchLuasStopTimesErrorAction
  | FetchLuasStopTimesInitAction;