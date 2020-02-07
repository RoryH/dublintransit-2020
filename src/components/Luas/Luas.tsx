import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { LuasStation } from '../../types';
import LuasStop from '../../containers/LuasStop';

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

  return coordinates && nearestStation ? (
    <Container>
      <LuasStop station={nearestStation} />
    </Container>
  ) : <Container>Please allow location...</Container>;
}

export default Luas;