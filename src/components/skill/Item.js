import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        {item? item.skill_menu_name : ""}
      </div>
    )
  }
}

export default Item;
