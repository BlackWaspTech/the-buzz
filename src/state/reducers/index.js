import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { waspGraphqlReducer } from 'redux-wasp';

const reducers = combineReducers({
  user: userReducer,
  graphql: waspGraphqlReducer
});

export default reducers;
