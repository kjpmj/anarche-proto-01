import React, { Component } from 'react';
import Input2 from 'components/common/input/Input2';

class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <div style={{ fontFamily: 'NanumSquareRoundEB' }}>
        <Input2 placeholder={item ? item.skill_menu_name : ''} />
      </div>
    );
  }
}

export default Item;
