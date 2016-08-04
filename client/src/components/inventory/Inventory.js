
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InventoryFilter from './InventoryFilter';
import InventoryList from './InventoryList';

import { filterItems } from '../../actions/inventoryActions';


class Inventory extends Component {
  constructor() {    
    super();
    this.handleQueryChange = function (event) {
      let query = event.target.value;
      this.props.dispatch(filterItems(query));
    }.bind(this); 
  }  

  render() {
    return (
      <div className="inventory">
        <InventoryFilter onChange={this.handleQueryChange}/>
        <InventoryList items={this.props.items} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    items: state.inventory.items
  };
}

export default connect(mapState)(Inventory);
