import React, { Component } from 'react';
import Button from 'components/common/button/Button'
import Skill from 'components/skill/Skill';
import { connect } from 'react-redux';
import { fetchSkill, changeSkill } from 'actions/action';
import Flex, { FlexItem } from 'styled-flex-component';

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
      return(
        <FlexItem order={item.index} key={item.index}>
          <Skill
            index={item.index}
            skill_name={item.skill_name}
            skill_value={item.skill_value}
            onChangeSkill={onChangeSkill}
          />
        </FlexItem>
      )
    });

    return (
      <React.Fragment>
        <Flex center full wrap="true">
          <FlexItem order="1">
            <select ref="serverName">
              <option value="ORCHIDNA">오키드나</option>
              <option value="NUI">누이</option>
              <option value="HAJE">하제</option>
              <option value="DAMIAN">다미안</option>
              <option value="EANNA">에안나</option>
            </select>
          </FlexItem>
          <FlexItem order="2">
            <input placeholder="캐릭터명" ref="nickName"/>
          </FlexItem>
          <FlexItem order="3">
            <Button onClick={this.handleFetchSkill}>숙련도 조회</Button>
          </FlexItem>
        </Flex>
        <Flex full wrap="true">
          {skillDiv}
        </Flex>
      </React.Fragment>
    )
  }
}

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
