import React, { Component } from 'react';
import Button from 'components/common/button/Button';
import Spinner from 'components/common/spinner/Spinner';
import Skill from 'components/skill/Skill';
import { connect } from 'react-redux';
import { changeSkill, setSkill } from 'actions/action';
import { fetch } from 'actions/actionCommon';
import Flex, { FlexItem } from 'styled-flex-component';
import styled, { keyframes, css } from 'styled-components';
import Input2 from 'components/common/input/Input2';
import Select from 'components/common/select/Select';

class Skills extends Component {
  state = {
    serverName: '',
    characterName: '',
  };

  handleFetchSkill = () => {
    const { onFetchSkill, characterName } = this.props;
    const serverName = this.state.serverName;
    const nickName = this.state.characterName;

    const method = 'get';
    const url = `skills/${serverName}/${nickName}`;
    const params = {};
    const callback = setSkill;

    onFetchSkill(method, url, params, callback);
  };

  handleCharacterNameChange = inputValue => {
    this.setState({ characterName: inputValue });
  };

  handleChangeSelect = selectValue => {
    this.setState({ serverName: selectValue });
  };

  render() {
    const { skills, onChangeSkill, isLoading } = this.props;

    const skillDiv = skills.map(item => {
      console.log(item);
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

    const params = {
      data: [
        { code: 'ORCHIDNA', name: '오키드나' },
        { code: 'NUI', name: '누이' },
        { code: 'HAJE', name: '하제' },
        { code: 'DAMIAN', name: '다미안' },
        { code: 'EANNA', name: '에안나' },
      ],
    };

    return (
      <React.Fragment>
        <SearchWrapper>
          <Flex center full wrap="true">
            <FlexItem order="1">
              <Select params={params} onChange={this.handleChangeSelect} />
            </FlexItem>
            <FlexItem order="2">
              <Input2
                placeholder="캐릭터명"
                value={this.state.characterName}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Skills);
