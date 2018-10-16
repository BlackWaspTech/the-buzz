import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { createWaspMiddleware } from 'redux-wasp';
const waspMiddleware = createWaspMiddleware();

const store = createStore(reducers, applyMiddleware(waspMiddleware));

export default store;
