import { LuasStation } from './api-data';

export interface RootState {
  luas: LuasState;
}

interface LuasState {
  stations: LuasStation[];
  nearestStation: LuasStation | undefined;
}