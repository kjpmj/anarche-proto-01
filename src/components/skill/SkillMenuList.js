import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillMenu from './SkillMenu';
import { setSkillMenu } from 'actions/action';

class SkillMenuList extends Component{
  render() {
    const { onSkillMenuClick, skillMenuList } = this.props;

    const skill_menu = skillMenuList.map((skillMenu) => {
      return <SkillMenu
        key={skillMenu.index}
        skillMenu={skillMenu}
        onSkillMenuClick={onSkillMenuClick}
        display={skillMenu.display}
      />
    });

    return (
      <div>
        {skill_menu}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    skillMenuList : state.skillMenuList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSkillMenuClick : (skillMenu) =>{
      dispatch(setSkillMenu(skillMenu));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillMenuList);