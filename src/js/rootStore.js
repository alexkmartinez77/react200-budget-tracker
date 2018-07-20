import { createStore } from 'redux';
import rootReducer from './rootReducer';

const rootStore = createStore(
  rootReducer,                                                                  // from rootReducer.js that merges all reducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //this is to allow devTools to work
);

export default rootStore;