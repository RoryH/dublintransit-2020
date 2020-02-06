import React, { useEffect } from 'react';
import { LuasStation } from '../../types';

export interface LuasProps {
  coordinates?: Coordinates;
  stations: LuasStation[];
  nearestStation: LuasStation | undefined;
  fetchLuasStops: Function;
  findNearestStop: Function;
}

const Luas: React.FunctionComponent<LuasProps> = ({
  stations,
  fetchLuasStops,
  findNearestStop,
  coordinates,
  nearestStation,
}) => {
  useEffect(() => {
    fetchLuasStops();
  }, [fetchLuasStops]);

  useEffect(() => {
    if (coordinates) {
      findNearestStop(coordinates, stations);
    }
  }, [coordinates, findNearestStop, stations]);

  return coordinates ? (
    <div>
      <h1>Station</h1>
      <div>{coordinates.latitude}, {coordinates.longitude}</div>
      {nearestStation && nearestStation.displayName}
    </div>
  ) : <div>Please allow location...</div>;
}

export default Luas;