
import React, { Component } from 'react';
import SkyLight from 'react-skylight';

import SystemsList from './SystemsList';
import ToolsList from './ToolsList';
import ItemsList from './ItemsList';

import SystemDetails from './SystemDetails';
import ToolDetails from './ToolDetails';
import ItemDetails from './ItemDetails';

import './InventoryList.css';


class InventoryList extends Component {
  constructor() {
    super();
    this.active = null;
    this.showDetails = function(obj) {
      this.active = obj;
      this.forceUpdate();
      this.refs.dialog.show();
    }.bind(this);
  }

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

    const modalStyles = {
      color: '#555',
      width: '90%',
      left: '5%',
      top: '10%',
      marginTop: '0',
      marginLeft: '0',
      height: '800px',
      maxHeight: 'calc(100vh - 210px)',
      overflowY: 'auto'
    };

    return (
      <div className="inventory-list">
        {systemsArray.length ?
          <SystemsList
            updateQuery={this.props.updateQuery}
            query={this.props.query}
            systems={systemsArray}
            onRowClick={this.showDetails} /> : null}

        {toolsArray.length ?
          <ToolsList
            updateQuery={this.props.updateQuery}
            query={this.props.query}
            tools={toolsArray}
            onRowClick={this.showDetails} /> : null}

        {itemsArray.length ?
          <ItemsList
            updateQuery={this.props.updateQuery}
            query={this.props.query}
            items={itemsArray}
            onRowClick={this.showDetails} /> : null}

        <SkyLight
          hideOnOverlayClicked
          ref="dialog"
          dialogStyles={modalStyles}>

          {this.active && this.active.type === 'systems' ?
            <SystemDetails system={this.active} /> : null}

          {this.active && this.active.type === 'tools' ?
            <ToolDetails tool={this.active} /> : null}

          {this.active && this.active.type === 'items' ?
            <ItemDetails item={this.active} /> : null}

        </SkyLight>
      </div>
    );
  }
}

export default InventoryList;
