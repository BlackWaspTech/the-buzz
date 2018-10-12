import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { waspGraphqlReducer } from '../../utilities/redux-wasp/index';

const reducers = combineReducers({
  user: userReducer,
  graphql: waspGraphqlReducer
});

export default reducers;
