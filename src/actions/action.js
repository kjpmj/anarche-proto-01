import axios from 'axios';

/** 숙련도 셋팅 */
export const SET_SKILL = 'SET_SKILL';
/** 숙련도 변경 */
export const CHANGE_SKILL = 'CHANGE_SKILL';
/** 숙련도 조회 */
export const FETCH_SKILL = 'FETCH_SKILL';
/** 스킬메뉴 셋팅*/
export const SET_SKILL_MENU = 'SET_SKILL_MENU';

/** 숙련도 조회 Thunk */
export const fetchSkill = (serverName, nickName) => {
  return (dispatch) => {
    axios.get(`skills/${serverName}/${nickName}`)
      .then(resp => {
        if(resp.status >= 200 && resp.status < 400){
          dispatch(setSkill(resp.data))
        }else{

        }
      })
      .catch(err =>{

      })
  }
}

/** 숙련도 셋팅 액셩생성 함수*/
export const setSkill = (skills) =>{
  return { type : SET_SKILL, skills }
}

/** 숙련도 변경 액션생성 함수*/
export const changeSkill = (skill) =>{
  return { type : CHANGE_SKILL, skill }
}

/** 스킬메뉴 셋팅 액션생성 함수*/
export const setSkillMenu = (skillMenu) =>{
  return { type : SET_SKILL_MENU, skillMenu }
}