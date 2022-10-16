import React, { Component } from 'react';
import { ItemList } from '../item-list/Item-list';
import { ItemDetails } from '../item-details/Item-details';
import { ApiResources } from '../api-resurses/Api-Resurs';
import { ErrorBoundry } from '../error-boundry/Error-boundry';


class PeoplePage extends Component {
  state = {
    selectedItemId: 1
  };

  myApi = new ApiResources();

  listItemHandler = (id) => {
    this.setState({
      selectedItemId: id,
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <div className='content-wrapper'>
          <ItemList listItemHandler={this.listItemHandler} getData={this.myApi.getAllPeople} >
            {(item) => item.name}
          </ItemList>
          <ItemDetails selectedItemId={this.state.selectedItemId} getData={this.myApi.getPerson} />
        </div>
      </ErrorBoundry>
    );
  }
};

export { PeoplePage };

