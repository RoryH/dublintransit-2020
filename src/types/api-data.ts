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

export interface LuasInstance {
    dueMins: string;
    destination: string;
}

export interface LuasDirection {
    name: string;
    tram: LuasInstance[];
}

export interface LuasStopTimesApiResponse {
  created: Date;
  stop: string;
  stopAbv: string;
  message: string;
  direction: LuasDirection[];
}

