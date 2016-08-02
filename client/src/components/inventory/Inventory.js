import React, { Component } from 'react';

import InventoryFilter from './InventoryFilter'
import InventoryList from './InventoryList'

class Inventory extends Component {
  constructor() {
    super();

    // Mock data
    this.initialList = [
      {
        id: 1,
        name: 'Name1'
      },
      {
        id: 2,
        name: 'Name2'
      },
      {
        id: 3,
        name: 'Name3'
      },
      {
        id: 4,
        name: 'Name4'
      }
    ]

    this.state = { items: this.initialList };
  }

  filter(queryString) {
    let items = this.initialList.filter((item) => {
      return item.name.indexOf(queryString) > -1
    });
    this.setState({items});
  }

  render() {
    return (
      <div className="inventory">
        <InventoryFilter filter={this.filter.bind(this)} />
        <InventoryList items={this.state.items} />
      </div>
    );
  }
}

export default Inventory;
