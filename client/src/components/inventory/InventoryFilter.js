
import React, { Component } from 'react';

class InventoryFilter extends Component {
  render() {
    return (
      <div className="inventory-filter">
        <input 
          onChange={this.props.onChange} 
          type="text" 
          placeholder="Search" />
      </div>
    );
  }
}

export default InventoryFilter;
