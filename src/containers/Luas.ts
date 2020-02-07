import { connect } from 'react-redux';
import {
  createFetchLuasStopsSuccessAction,
  createFetchLuasStopsInitAction,
  createFetchLuasStopsErrorAction,
  setNearestLuasStation,
} from '../actionCreators';
import { Dispatch } from 'redux';
import Luas from '../components/Luas';
import { ActionTypes, RootState, LuasStation } from '../types';
import checkHttpStatus from '../utilities/check-http-status';
import getDistanceBetweenCoordinates from '../utilities/get-distance-between-coordinates';

const fetchLuasStops = (dispatch: Dispatch<ActionTypes>) => () => {
  dispatch(createFetchLuasStopsInitAction());
  return fetch('https://roryhaddon.com/api/dublin/luas/stops')
    .then(checkHttpStatus)
    .then(resp => resp.json())
    .then(resp => {
      dispatch(createFetchLuasStopsSuccessAction(resp));
    })
    .catch(error => {
      dispatch(createFetchLuasStopsErrorAction(error));
    });
}

const findNearestStop = (dispatch: Dispatch<ActionTypes>) => (coordinates: Coordinates, stations: LuasStation[]) => {
  let closestValue: number | undefined;
  let closestStation: LuasStation | undefined;
  stations.forEach(station => {
    const distToStation = getDistanceBetweenCoordinates(
      station.coordinates,
      {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      }
    );
    if (closestValue === undefined || distToStation < closestValue) {
      closestValue = distToStation;
      closestStation = station;
    }
  })
  if (closestStation) {
    dispatch(setNearestLuasStation(closestStation));
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  fetchLuasStops: fetchLuasStops(dispatch),
  findNearestStop: findNearestStop(dispatch),
});

const mapStateToProps = (state: RootState) => ({
  ...state.luas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Luas);