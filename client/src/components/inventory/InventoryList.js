
import React, { Component } from 'react';

import InventoryItem from './InventoryItem';

import './InventoryList.css';

class InventoryList extends Component {
  render() {
    const InventoryItemArray = this.props.items.map((item) => {
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
        <tbody>{InventoryItemArray}</tbody>
      </table>
    );
  }
}

export default InventoryList;
