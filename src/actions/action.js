import axios from 'axios';

/** 숙련도 셋팅 */
export const SET_SKILL = 'SET_SKILL';
/** 계산하기 */
export const SET_CALC = 'SET_CALC';
/** 숙련도 조회 */
export const FETCH_SKILL = 'FETCH_SKILL';
/** 아이템 조회 */
export const FETCH_ITEM = 'FETCH_ITEM';

/** 숙련도 조회 Thunk */
export const fetchSkill = (nickName) => {
  return (dispatch) => {
    axios.get(`skills/${nickName}`)
      .then(resp => dispatch(setSkill(resp.data)))
  }
}

/** 숙련도 셋팅 액셩생성 함수*/
export const setSkill = (skills) =>{
  return { type : SET_SKILL, skills }
}


