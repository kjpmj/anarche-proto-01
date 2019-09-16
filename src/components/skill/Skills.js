import React, { Component } from 'react';
import Button from 'components/common/button/Button'
import Skill from 'components/skill/Skill';
import { connect } from 'react-redux';
import { fetchSkill, changeSkill } from 'actions/action';
import styled from 'styled-components';

class Skills extends Component {
  handleFetchSkill = () => {
    const { onFetchSkill } = this.props;
    const serverName = this.refs.serverName.value.trim();
    const nickName = this.refs.nickName.value.trim();
    onFetchSkill(serverName, nickName);
  }

  render() {
    const { skills, onChangeSkill } = this.props;

    const skillDiv = skills.map(item => {
      return <Skill
        key={item.index}
        index={item.index}
        skill_name={item.skill_name}
        skill_value={item.skill_value}
        onChangeSkill={onChangeSkill}
      />
    });

    return (
      <div>
        <div>
          <select ref="serverName">
            <option value="ORCHIDNA">오키드나</option>
            <option value="NUI">누이</option>
            <option value="HAJE">하제</option>
            <option value="DAMIAN">다미안</option>
            <option value="EANNA">에안나</option>
          </select>
          <input placeholder="캐릭터명" ref="nickName"/>
          <Button onClick={this.handleFetchSkill}>숙련도 조회</Button>
        </div>
        <SkillsContainer>
          {skillDiv}
        </SkillsContainer>
      </div>
    )
  }
}

const SkillsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`

const mapStateToProps = (state) =>{
  return {
    skills : state.skills
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSkill : (serverName, nickName) =>{
      dispatch(fetchSkill(serverName, nickName));
    },
    onChangeSkill : (skill) =>{
      dispatch(changeSkill(skill));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
