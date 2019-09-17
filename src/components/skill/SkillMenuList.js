import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillMenu from './SkillMenu';
import { setSkillMenu } from 'actions/action';
import Flex, { FlexItem } from 'styled-flex-component';

class SkillMenuList extends Component{
  render() {
    const { onSkillMenuClick, skillMenuList } = this.props;

    const skill_menu = skillMenuList.map((skillMenu) => {
      return (
        <FlexItem order={skillMenu.index} key={skillMenu.index}>
          <SkillMenu
            skillMenu={skillMenu}
            onSkillMenuClick={onSkillMenuClick}
            display={skillMenu.display}
          />
        </FlexItem>
      )
    });

    return (
      <Flex full wrap="true">
        {skill_menu}
      </Flex>
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