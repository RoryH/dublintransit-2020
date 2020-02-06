import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';
import { RootState, ActionTypes } from './types';
import './App.css';
import LuasContainer from './containers/Luas';

const store = createStore<RootState, ActionTypes, unknown, unknown>(appReducer);

const App = () => {
  const [ coordinates, setCoordinates ] = useState<Coordinates>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location: Position) => {
      setCoordinates(location.coords);
    });
  }, [])

  return (
    <Provider store={store}>
      <LuasContainer coordinates={coordinates} />
    </Provider>
  );
}

export default App;
