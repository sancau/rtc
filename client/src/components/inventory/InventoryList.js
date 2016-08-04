
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InventoryItem from './InventoryItem';


import './InventoryList.css';

class InventoryList extends Component {
  render() {
    const items = [];
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

function mapStateToProps(store) {
  return {
    items: store.items
  }
}

export default connect(mapStateToProps)(InventoryList);
