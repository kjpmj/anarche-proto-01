import React, { Component } from 'react';
import Skill from './components/Skill';
import { connect } from 'react-redux';
import { fetchSkill } from './actions/action';

class App extends Component {
  render(){
    const { skills, onFetchSkill } = this.props;

    return (
      <div>
        <Skill
          skills={skills}
          onFetchSkill={onFetchSkill}
        />
      </div>
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
    onFetchSkill : (nickName) =>{
      dispatch(fetchSkill(nickName));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
