
import React, { Component } from 'react';

import InventoryFilter from './InventoryFilter';
import InventoryList from './InventoryList';

import ItemStore from '../../stores/ItemStore';

class Inventory extends Component {
  constructor() {
    super();
    this.state = { items: ItemStore.getItems() };
  }

  componentWillMount() {
    ItemStore.on('change', () => {
      this.setState({
        items: ItemStore.getItems()
      });
    });
  }

  render() {
    return (
      <div className="inventory">
        <InventoryFilter />
        <InventoryList items={this.state.items} />
      </div>
    );
  }
}

export default Inventory;
