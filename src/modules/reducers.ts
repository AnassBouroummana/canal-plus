import { Reducer } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import { LocationChangeAction, RouterState } from 'connected-react-router';
import { reducer as movies } from './Movies';
import { reducer as movieDetails } from './MovieDetails';

export default function createReducer(asyncReducers: {
  router: Reducer<RouterState, LocationChangeAction>;
}) {
  return combineReducers({
    ...asyncReducers,
    movies,
    movieDetails,
  });
}
