
import React, { Component } from 'react';

import './InventoryFilter.css'

class InventoryFilter extends Component {
  render() {
    return (
      <div className="inventory-filter">

        <input
          onChange={this.props.onChange}
          type="text"
          placeholder="Поиск" />

        <button
          className={this.props.getButtonClass('systems')}
          onClick={
          () => this.props.onTypeClick('systems')}> Системы </button>

        <button
          className={this.props.getButtonClass('tools')}
          onClick={
          () => this.props.onTypeClick('tools')}> Приборы </button>

        <button
          className={this.props.getButtonClass('items')}
          onClick={
          () => this.props.onTypeClick('items')}> Другое </button>

        <button
          className={this.props.getButtonClass('all')}
          onClick={
          () => this.props.onTypeClick('all')}> Показать всё </button>

      </div>
    );
  }
}

export default InventoryFilter;
