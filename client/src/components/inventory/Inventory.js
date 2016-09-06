
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InventoryFilter from './InventoryFilter';
import InventoryList from './InventoryList';

import { fetchItems, filterItems } from '../../actions/inventoryActions';
import { mergeDeep } from '../../helpers/utils';


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
  }

  componentWillMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    return (
      <div className="inventory">
        <h2> Инвентарь </h2>
        <hr />
        <InventoryFilter
          updateQuery={this.updateQuery}
          query={this.query}
        />
        <InventoryList
          items={this.props.items}
          updateQuery={this.updateQuery}
          query={this.query}
        />
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
