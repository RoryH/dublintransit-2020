import { LuasStation, LuasStopTimesApiResponse } from './api-data';

export interface RootState {
  luas: LuasState;
}

interface LuasState {
  stations: LuasStation[];
  nearestStation: LuasStation | undefined;
  stationInfo: LuasStopTimesApiResponse | undefined;
}