
import React, { Component } from 'react';

import InventoryItem from './InventoryItem';

import './InventoryList.css';

class InventoryList extends Component {
  render() {
    const InventoryItemArray = this.props.items.map((item) => {
      return <InventoryItem key={item._id} item={item}></InventoryItem>
    });

    return (
      <table className="inventory-list">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>{InventoryItemArray}</tbody>
      </table>
    );
  }
}

export default InventoryList;
