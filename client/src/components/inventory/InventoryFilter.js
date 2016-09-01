
import React, { Component } from 'react';

import './InventoryFilter.css'

class InventoryFilter extends Component {
  render() {
    return (
      <div className="inventory-filter row">
        <div className="col-xs-4">
          <input
            className="form-control"
            onChange={this.props.onChange}
            type="text"
            placeholder="Поиск" />
        </div>

        <div className="col-xs-8">
          <button
            className={`${this.props.getButtonClass('all')} pull-right`}
            onClick={
              () => this.props.onTypeClick('all')}> Показать всё </button>

          <button
            className={`${this.props.getButtonClass('items')} pull-right`}
            onClick={
            () => this.props.onTypeClick('items')}> Другое </button>

          <button
          className={`${this.props.getButtonClass('tools')} pull-right`}
          onClick={
            () => this.props.onTypeClick('tools')}> Приборы </button>

          <button
          className={`${this.props.getButtonClass('systems')} pull-right`}
          onClick={
            () => this.props.onTypeClick('systems')}> Системы </button>
        </div>

      </div>
    );
  }
}

export default InventoryFilter;
