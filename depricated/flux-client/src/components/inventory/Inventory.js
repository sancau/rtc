
import React, { Component } from 'react';

import InventoryFilter from './InventoryFilter';
import InventoryList from './InventoryList';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <InventoryFilter />
        <InventoryList />
      </div>
    );
  }
}

export default Inventory;
