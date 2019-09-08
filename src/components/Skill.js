import React, { Component } from 'react';

class Skill extends Component {
  handleFetchSkill = () => {
    const { onFetchSkill } = this.props;
    const nickName = this.refs.nickName.value.trim();
    onFetchSkill(nickName);
  }

  render() {
    const { skills } = this.props;

    const skillDiv = skills.map(item => {
      return (
        <div key={item.index}>
          <div>{item.skill_name}</div>
          <input type="text" value={item.skill_value}/>
        </div>
      )
    });

    return (
      <div>
        <div>
          <input placeholder="캐릭터명" ref="nickName"/>
          <button onClick={this.handleFetchSkill}>숙련도 조회</button>
        </div>
        {skillDiv}
      </div>
    )
  }
}

export default Skill;