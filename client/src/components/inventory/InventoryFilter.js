import React, { Component } from 'react';

class InventoryFilter extends Component {
  handleChange(e) {
    const queryString = e.target.value;
    this.props.filter(queryString);
  }

  render() {
    return (
      <div className="inventory-filter">
        <input 
          onChange={this.handleChange.bind(this)} 
          type="text" 
          placeholder="Search" />
      </div>
    );
  }
}

export default InventoryFilter;
