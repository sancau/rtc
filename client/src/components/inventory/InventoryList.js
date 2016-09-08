
import React, { Component } from 'react';
import { SkyLightStateless } from 'react-skylight';

import SystemsList from './SystemsList';
import ToolsList from './ToolsList';
import ItemsList from './ItemsList';

import SystemDetails from './SystemDetails';
import ToolDetails from './ToolDetails';
import ItemDetails from './ItemDetails';

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

    const modalStyles = {
      color: '#555',
      width: '90%',
      left: '5%',
      top: '3%',
      height: '95%',
      marginTop: '0',
      marginLeft: '0',
      overflowY: 'auto',
    };

    const detailsModalVisible = this.props.detailsModalVisible;
    const active = this.props.active;
    const closeDetails = this.props.closeDetails;

    return (
      <div className="inventory-list">
        {systemsArray.length ?
          <SystemsList
            updateQuery={this.props.updateQuery}
            query={this.props.query}
            systems={systemsArray}
            onRowClick={this.props.showDetails} /> : null}

        {toolsArray.length ?
          <ToolsList
            updateQuery={this.props.updateQuery}
            query={this.props.query}
            tools={toolsArray}
            onRowClick={this.props.showDetails} /> : null}

        {itemsArray.length ?
          <ItemsList
            updateQuery={this.props.updateQuery}
            query={this.props.query}
            items={itemsArray}
            onRowClick={this.props.showDetails} /> : null}

        <SkyLightStateless
          onCloseClicked={this.props.closeDetails}
          onOverlayClicked={this.props.closeDetails}
          isVisible={detailsModalVisible}
          dialogStyles={modalStyles}>

          {active && active.type === 'systems' ?
            <SystemDetails
              saveDocument={this.props.saveDocument}
              deleteDocument={this.props.deleteDocument}
              system={active}  /> : null}

          {active && active.type === 'tools' ?
            <ToolDetails tool={active} /> : null}

          {active && active.type === 'items' ?
            <ItemDetails item={active} /> : null}

        </SkyLightStateless>
      </div>
    );
  }
}

export default InventoryList;
