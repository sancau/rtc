
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

import InventoryFilter from './InventoryFilter';
import InventoryList from './InventoryList';

import NewObject from './NewObject';

import {
  fetchItems,
  filterItems,
  saveDocument,
  deleteDocument,
  showDetails,
  closeDetails,
  showNew,
  closeNew,
  addDocument } from '../../actions/inventoryActions';

import { mergeDeep } from '../../helpers/utils';

import addObjectImage from '../../images/plus.svg';

import './Inventory.css';


class Inventory extends Component {
  constructor() {
    super();

    // initial default query
    this.initialQuery = {
      queryString: '',
      sorting: {
        prop: 'name',
        order: 'ascending'
      },
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

    this.closeNew = function() {
      this.props.dispatch(closeNew());
    }.bind(this);

    this.addObject = function(data) {
      this.props.dispatch(addDocument(data));
    }.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    return (
      <div className="inventory">
        <StickyContainer>
          <div className="row">
            <div className="col-xs-4">
              <h2> Инвентарь </h2>
            </div>
            <div className="col-xs-8">
              <img
                className="add-img pull-right"
                alt="Добавить запись"
                title="Добавить запись"
                onClick={() => this.props.dispatch(showNew())}
                src={addObjectImage} />
            </div>
          </div>

          <NewObject
            close={this.closeNew}
            visible={this.props.newModalVisible}
            addObject={this.addObject}>
          </NewObject>

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
    active: state.inventory.active,
    newModalVisible: state.inventory.newModalVisible
  };
}

export default connect(mapState)(Inventory);
