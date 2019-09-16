import React, { Component } from 'react';
import styled from 'styled-components';

class SkillMenu extends Component {

  handleSkillMenuClick = () => {
    const { onSkillMenuClick, skillMenu } = this.props;
    const returnSkillMenu = {
      ...skillMenu,
      display : true
    }

    onSkillMenuClick(returnSkillMenu);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.display === nextProps.display){
      return false;
    }
    return true;
  }

  render() {
    const { skillMenu } = this.props;

    return (
      <ButtonSkillMenu
        onClick={this.handleSkillMenuClick}
        display={skillMenu.display? "display" : ""}
      >{skillMenu.skill_menu_name}
      </ButtonSkillMenu>

    )
  }
}

const ButtonSkillMenu = styled.button`
  background-color : ${(props) => props.display ? props.theme.color.main : "#fff"}
`

export default SkillMenu;