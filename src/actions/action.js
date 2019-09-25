/** 숙련도 셋팅 */
export const SET_SKILL = 'SET_SKILL';
/** 숙련도 변경 */
export const CHANGE_SKILL = 'CHANGE_SKILL';
/** 스킬메뉴 셋팅*/
export const SET_SKILL_MENU = 'SET_SKILL_MENU';

/** 숙련도 셋팅 액셩생성 함수*/
export const setSkill = skills => {
  return { type: SET_SKILL, skills };
};

/** 숙련도 변경 액션생성 함수*/
export const changeSkill = skill => {
  return { type: CHANGE_SKILL, skill };
};

/** 스킬메뉴 셋팅 액션생성 함수*/
export const setSkillMenu = skillMenu => {
  return { type: SET_SKILL_MENU, skillMenu };
};
