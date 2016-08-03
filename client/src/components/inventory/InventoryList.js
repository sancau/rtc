
import React, { Component } from 'react';

import InventoryItem from './InventoryItem';
import ItemStore from '../../stores/ItemStore';

import './InventoryList.css';

class InventoryList extends Component {
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
    const items = this.state.items;
    const itemsList = items.map((item) => {
      return <InventoryItem key={item.id} item={item}></InventoryItem>
    });

    return (
      <table className="inventory-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{itemsList}</tbody>
      </table>
    );
  }
}

export default InventoryList;
