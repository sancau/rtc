
import React, { Component } from 'react';

class InventoryItem extends Component {
  render() {
    return (
      <tr className="inventory-item"> 
        <td> {this.props.item.name} </td>
      </tr>
    );
  }
}

export default InventoryItem;
