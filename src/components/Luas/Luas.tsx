import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { LuasStation } from '../../types';
import LuasStop from '../../containers/LuasStop';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Dublin Transit
          </Typography>
        </Toolbar>
      </AppBar>
      <LuasStop station={nearestStation} />
    </Container>
  ) : <Container>Please allow location...</Container>;
}

export default Luas;