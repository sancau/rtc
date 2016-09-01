
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InventoryFilter from './InventoryFilter';
import InventoryList from './InventoryList';

import { fetchItems, filterItems } from '../../actions/inventoryActions';


class Inventory extends Component {
  constructor() {
    super();
    this.mergedQuery = {
      queryString: '',
      types: {
        'systems': true,
        'tools': true,
        'items': true
      }
    };

    this.handleQueryChange = function (event) {
      this.mergedQuery.queryString = event.target.value;
      this.props.dispatch(filterItems(this.mergedQuery));
    }.bind(this);

    this.getButtonClass = function (type) {
      return this.mergedQuery.types[type] ? 'active' : '';
    }.bind(this);

    this.handleTypeClick = function (type) {
      if (type === 'all') {
        this.mergedQuery.types = {
          'systems': true,
          'tools': true,
          'items': true
        };
      } else {
        this.mergedQuery.types[type] = !this.mergedQuery.types[type];
      }
      this.props.dispatch(filterItems(this.mergedQuery));
    }.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    return (
      <div className="inventory">
        <InventoryFilter
          onChange={this.handleQueryChange}
          onTypeClick={this.handleTypeClick}
          getButtonClass={this.getButtonClass}
        />
        <InventoryList items={this.props.items} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    items: state.inventory.items
  };
}

export default connect(mapState)(Inventory);
