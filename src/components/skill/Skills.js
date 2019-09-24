import React, { Component } from 'react';
import Button from 'components/common/button/Button';
import Spinner from 'components/common/spinner/Spinner';
import Skill from 'components/skill/Skill';
import { connect } from 'react-redux';
import { changeSkill, setSkill, setCharacterName } from 'actions/action';
import { fetch } from 'actions/actionCommon';
import Flex, { FlexItem } from 'styled-flex-component';
import styled, { keyframes, css } from 'styled-components';
import Input2 from 'components/common/input/Input2';

class Skills extends Component {
  handleFetchSkill = () => {
    const { onFetchSkill, characterName } = this.props;
    const serverName = this.refs.serverName.value.trim();
    const nickName = characterName;

    const method = 'get';
    const url = `skills/${serverName}/${nickName}`;
    const params = {};
    const callback = setSkill;

    onFetchSkill(method, url, params, callback);
  };

  handleCharacterNameChange = e => {
    const { onChangeCharacterName } = this.props;
    const characterName = e.target.value;
    onChangeCharacterName(characterName);
  };

  render() {
    const { skills, onChangeSkill, isLoading, characterName } = this.props;

    const skillDiv = skills.map(item => {
      return (
        <FlexItem order={item.index} key={item.index}>
          <SkillWrapper>
            <Skill
              index={item.index}
              skill_name={item.skill_name}
              skill_value={item.skill_value}
              onChangeSkill={onChangeSkill}
            />
          </SkillWrapper>
        </FlexItem>
      );
    });

    return (
      <React.Fragment>
        <SearchWrapper>
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
              <Input2
                placeholder="캐릭터명"
                value={characterName}
                onChange={this.handleCharacterNameChange}
              />
              {/* <input placeholder="캐릭터명" ref="nickName" /> */}
            </FlexItem>
            <FlexItem order="3">
              <Button onClick={this.handleFetchSkill}>숙련도 조회</Button>
            </FlexItem>
          </Flex>
        </SearchWrapper>
        {isLoading ? (
          <Flex full center>
            <Spinner />
          </Flex>
        ) : (
          <Flex full wrap="true">
            {skillDiv}
          </Flex>
        )}
        {/* <Flex full wrap="true">
          {skillDiv}
        </Flex>
        <Flex full center>
          <Spinner />
        </Flex> */}
      </React.Fragment>
    );
  }
}

const SearchWrapper = styled.div`
  margin: 2% 2%;
`;

const SkillWrapper = styled.div`
  font-family: NanumSquareRoundB;
  margin: 15px;
`;

const mapStateToProps = state => {
  return {
    skills: state.skills,
    isLoading: state.isLoading,
    characterName: state.characterName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSkill: (method, url, params, callback) => {
      dispatch(fetch(method, url, params, callback));
    },
    onChangeSkill: skill => {
      dispatch(changeSkill(skill));
    },
    onChangeCharacterName: characterName => {
      dispatch(setCharacterName(characterName));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Skills);
