import React, { Component } from 'react';
import Select from 'components/common/select/Select';

class Item extends Component {
  render() {
    const { item } = this.props;

    const params = {
      data: [
        { code: 'ORCHIDNA', name: '오키드나' },
        { code: 'NUI', name: '누이' },
        { code: 'HAJE', name: '하제' },
        { code: 'DAMIAN', name: '다미안' },
        { code: 'EANNA', name: '에안나' },
      ],
    };
    return <div style={{ fontFamily: 'NanumSquareRoundEB' }}></div>;
  }
}

export default Item;
