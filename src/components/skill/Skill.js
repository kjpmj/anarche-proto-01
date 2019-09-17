import React, { Component } from 'react';
import InputText from 'components/common/input/Input';

class Skill extends Component {
  getLaborDownPercent = (value) => {
    if(value < 30000){
      return 0;
    }else if(value >= 30000 && value < 40000){
      return 5;
    }else if(value >= 40000 && value < 50000){
      return 10;
    }else if(value >= 50000 && value < 70000){
      return 15;
    }else if(value >= 70000 && value < 150000){
      return 20;
    }else if(value >= 150000 && value < 180000){
      return 25;
    }else if(value >= 180000 && value < 230000){
      return 30;
    }else if(value >= 230000){
      return 40;
    }
  }

  handleInputChange = (e) => {
    const { index, skill_name, onChangeSkill } = this.props;
    const skill_value = e.target.value || 0;

    if(Number.isNaN(parseInt(skill_value))){
      return;
    }

    const skill =  {
      index,
      skill_name,
      skill_value : parseInt(skill_value),
      labor_down_percent : this.getLaborDownPercent(skill_value)
    };

    onChangeSkill(skill);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.skill_value === nextProps.skill_value){
      return false;
    }

    return true;
  }

  render(){
    const { skill_name, skill_value } = this.props;

    return (
      <React.Fragment>
        <div>{skill_name}</div>
        <InputText value={skill_value} onChange={this.handleInputChange} />
      </React.Fragment>
    )
  }
}

export default Skill;