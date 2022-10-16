import React, { Component } from 'react';

class ItemContainer extends Component {

  render() {
    const { left, right } = this.props;

    return (
      <div className='content-wrapper'>
        {left}
        {right}
      </div>
    );
  }
};

export { ItemContainer };