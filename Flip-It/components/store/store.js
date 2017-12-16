import { combineReducers, createStore } from 'redux';
import gridStore from './reducers/gridStore';
import setBoard from './reducers/setBoard';
import counter from './reducers/counter';
import nowTime from './reducers/nowTime';
import completedTime from './reducers/completedTime';

const reducer = combineReducers({
  bool: gridStore,
  dimensions: setBoard,
  count: counter,
  nowTime,
  completedTime
});

const store = createStore(reducer);

export default store;

export * from './reducers/gridStore';
export * from './reducers/setBoard';
export * from './reducers/counter';
export * from './reducers/nowTime';
export * from './reducers/completedTime';
