import { connect } from 'react-redux';
import {
  createFetchLuasStopTimesInitAction,
  createFetchLuasStopTimesSuccessAction,
  createFetchLuasStopTimesErrorAction,
} from '../actionCreators';
import { Dispatch } from 'redux';
import LuasStop from '../components/LuasStop';
import { ActionTypes, RootState } from '../types';
import checkHttpStatus from '../utilities/check-http-status';

const fetchLuasStopTimes = (dispatch: Dispatch<ActionTypes>) => (stationShortCode: string) => {
  dispatch(createFetchLuasStopTimesInitAction());
  return fetch(`https://roryhaddon.com/api/dublin/luas/stop/${stationShortCode}`)
    .then(checkHttpStatus)
    .then(resp => resp.json())
    .then(resp => {
      dispatch(createFetchLuasStopTimesSuccessAction(resp));
    })
    .catch(error => {
      dispatch(createFetchLuasStopTimesErrorAction(error));
    });
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  fetchLuasStopTimes: fetchLuasStopTimes(dispatch),
});

const mapStateToProps = (state: RootState) => ({
  stationInfo: state.luas.stationInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(LuasStop);