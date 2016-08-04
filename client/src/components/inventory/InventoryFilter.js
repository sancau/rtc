
import React, { Component } from 'react';

import './InventoryFilter.css'

class InventoryFilter extends Component {
  render() {
    return (
      <div className="inventory-filter">
        <input 
          onChange={this.props.onChange} 
          type="text" 
          placeholder="Поиск" />
      </div>
    );
  }
}

export default InventoryFilter;
