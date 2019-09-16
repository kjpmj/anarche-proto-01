import { combineReducers } from 'redux';
import { SET_SKILL, CHANGE_SKILL, SET_SKILL_MENU } from 'actions/action';
import produce from "immer"

const skill_name_list = [
  '축산', '농사', '낚시', '벌채', '채집', '채광', '연금', '요리', '공예', '기계', '금속', '인쇄', '석공', '재봉', '가죽', '무기', '목공', '건축', '손재주', '장사', '예술', '탐험'
];

const skill_list = skill_name_list.map((skill_name, index)=>{
  return {
    index : index,
    skill_name : skill_name,
    skill_value : 0,
    labor_down_percent : 0
  }
});

const skill_menu_list = skill_name_list.map((skill_name, index)=> {
  return {
    index : index,
    skill_menu_name : skill_name,
    display : false
  }
});

const skills = (state=skill_list, action) => {
  switch(action.type){
    case SET_SKILL :
      return action.skills;
    case CHANGE_SKILL :
      const nextState = produce(state, draftState => {
        draftState[action.skill.index] = action.skill;
      });

      return nextState;
    default :
      return state;
  }
}

const skillMenuList = (state=skill_menu_list, action) => {
  switch(action.type){
    case SET_SKILL_MENU:
      const nextState = skill_menu_list.map((skillMenu, index)=> {
        if( action.skillMenu.skill_menu_name === skillMenu.skill_menu_name ){
          return action.skillMenu;
        }

        return {...skillMenu, display : false}
      });

      return nextState;
    default :
      return state;
  }
}


const rootReducer = combineReducers({
  skills,
  skillMenuList
});

export default rootReducer;