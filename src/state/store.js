import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { createWaspMiddleware } from '../utilities/redux-wasp/index';
const waspMiddleware = createWaspMiddleware();

const store = createStore(reducers, applyMiddleware(waspMiddleware));

export default store;
