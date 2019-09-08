import { combineReducers } from 'redux';
import {
  SET_SKILL,
  SET_CALC
} from '../actions/action'

const skills = (state=[], action) => {
  switch(action.type){
    case SET_SKILL :
      return action.skills;
    default :
      return state;
  }
}


const rootReducer = combineReducers({
  skills
});

export default rootReducer;