
import React, { Component } from 'react';

import SystemsList from './SystemsList';
import ToolsList from './ToolsList';

import './InventoryList.css';

class InventoryList extends Component {
  render() {

    const itemsArray = this.props.items.filter((item) => {
      return item.type === 'items';
    });

    const toolsArray = this.props.items.filter((item) => {
      return item.type === 'tools';
    });

    const systemsArray = this.props.items.filter((item) => {
      return item.type === 'systems';
    });

    return (
      <div className="inventory-list">
        {systemsArray.length ? <SystemsList systems={systemsArray} /> : null}
        {toolsArray.length ? <ToolsList tools={toolsArray} /> : null}
      </div>
    );
  }
}

export default InventoryList;
