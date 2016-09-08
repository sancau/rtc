
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

import InventoryFilter from './InventoryFilter';
import InventoryList from './InventoryList';

import {
  fetchItems,
  filterItems,
  saveDocument,
  deleteDocument,
  showDetails,
  closeDetails } from '../../actions/inventoryActions';

import { mergeDeep } from '../../helpers/utils';

import './Inventory.css';


class Inventory extends Component {
  constructor() {
    super();

    // initial default query
    this.initialQuery = {
      queryString: '',
      types: {
        systems: {
          visible: true,
          climatic: {
            visible: true
          },
          mechanic: {
            visible: true
          }
        },
        tools: {
          visible: true
        },
        items: {
          visible: true,
          computer: {
            visible: true
          },
          furniture: {
            visible: true
          },
          instrument: {
            visible: true
          }
        }
      }
    };

    this.query = mergeDeep({}, this.initialQuery);

    this.updateQuery = function (data) {
      if (data == null) {
        let queryString = this.query.queryString;
        this.query = mergeDeep({}, this.initialQuery);
        this.query.queryString = queryString;
        this.props.dispatch(filterItems(this.query));
        return;
      }
      Object.assign(this.query, data);
      this.props.dispatch(filterItems(this.query));
    }.bind(this);

    this.saveDocument = function (doc) {
      this.props.dispatch(saveDocument(doc));
    }.bind(this);

    this.deleteDocument = function (doc) {
      this.props.dispatch(deleteDocument(doc));
    }.bind(this);

    this.showDetails = function (doc) {
      this.props.dispatch(showDetails(doc));
    }.bind(this);

    this.closeDetails = function() {
      this.props.dispatch(closeDetails());
    }.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    return (
      <div className="inventory">
        <StickyContainer>
          <h2> Инвентарь </h2>
          <Sticky className="sticky-filters">
            <InventoryFilter
              updateQuery={this.updateQuery}
              query={this.query}
            />
          </Sticky>
          <InventoryList
            items={this.props.items}
            updateQuery={this.updateQuery}
            query={this.query}
            saveDocument={this.saveDocument}
            deleteDocument={this.deleteDocument}
            active={this.props.active}
            detailsModalVisible={this.props.detailsModalVisible}
            showDetails={this.showDetails}
            closeDetails={this.closeDetails}
          />
        </StickyContainer>
      </div>
    );
  }
}

function mapState(state) {
  return {
    items: state.inventory.items,
    detailsModalVisible: state.inventory.detailsModalVisible,
    active: state.inventory.active
  };
}

export default connect(mapState)(Inventory);
