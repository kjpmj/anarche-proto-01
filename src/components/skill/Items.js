import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class Items extends Component {
  render() {
    const { skillMenuList } = this.props;
    const item = skillMenuList.find((item)=>{
      return item.display;
    });

    return (
      <Item
        item={item}
      />
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

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);