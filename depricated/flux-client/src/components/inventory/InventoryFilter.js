
import React, { Component } from 'react';

import * as InventoryActions from '../../actions/InventoryActions';

class InventoryFilter extends Component {
  handleChange(e) {
    const query = e.target.value;
    InventoryActions.filterItems(query);
  }

  render() {
    return (
      <div className="inventory-filter">
        <input 
          onChange={this.handleChange.bind(this)} 
          type="text" 
          placeholder="Search" />
      </div>
    );
  }
}

export default InventoryFilter;
