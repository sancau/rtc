
import React, { Component } from 'react';

import InventoryItem from './InventoryItem';

import './InventoryList.css';

class InventoryList extends Component {
  render() {
    const items = this.props.items;
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
