import { combineReducers } from 'redux';
import RandomizerReducer from './reducer_randomizer'

const rootReducer = combineReducers({
  randomizer: RandomizerReducer
});

export default rootReducer;
