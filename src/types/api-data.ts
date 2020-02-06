export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface LuasStation {
  shortName: string;
  displayName: string;
  displayIrishName: string;
  line: string;
  cycle: number;
  car: number;
  coordinates: Coordinates;
}

export interface LuasStopsApiResponse {
  stations: LuasStation[];
}