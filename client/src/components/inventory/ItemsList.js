
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import { genericSort } from '../../helpers/inventoryHelpers';

import './ItemsList.css';

class ItemsList extends Component {
  render() {
    const items = this.props.items.map((item, idx) => {
      return (
        <tr key={idx} onClick={() => this.props.onRowClick(item)}>
          <td> {item.name} </td>
          <td> {item.category === 'furniture' ?
            'Мебель' : item.category === 'instrument' ?
            'Инструмент' : 'Компьютеры'} </td>
          <td> {item.comment} </td>
        </tr>
      );
    });

    const querySlice = this.props.query.types.items;
    const getButtonClass = (type) => {
      if (type === 'all') {
        return (this.props.query.types.items.computer.visible &&
          this.props.query.types.items.furniture.visible &&
          this.props.query.types.items.instrument.visible) ?
          'btn-success' : 'btn-primary';
      }
      if (this.props.query.types.items.computer.visible &&
        this.props.query.types.items.furniture.visible &&
        this.props.query.types.items.instrument.visible) {
          return 'btn-primary';
      } else {
        return querySlice[type].visible  ?
        'btn-success' : 'btn-primary';
      }
    };

    const showComputer = () => {
      let newQuery = Object.assign(this.props.query, {});
      newQuery.types.items.computer.visible = true;
      newQuery.types.items.furniture.visible = false;
      newQuery.types.items.instrument.visible = false;
      this.props.updateQuery(newQuery);
    };

    const showFurniture = () => {
      let newQuery = Object.assign(this.props.query, {});
      newQuery.types.items.computer.visible = false;
      newQuery.types.items.furniture.visible = true;
      newQuery.types.items.instrument.visible = false;
      this.props.updateQuery(newQuery);
    };

    const showInstrument = () => {
      let newQuery = Object.assign(this.props.query, {});
      newQuery.types.items.computer.visible = false;
      newQuery.types.items.furniture.visible = false;
      newQuery.types.items.instrument.visible = true;
      this.props.updateQuery(newQuery);
    };

    const showAll = () => {
      let newQuery = Object.assign(this.props.query, {});
      newQuery.types.items.computer.visible = true;
      newQuery.types.items.furniture.visible = true;
      newQuery.types.items.instrument.visible = true;
      this.props.updateQuery(newQuery);
    };

    const sort = genericSort.bind(this);

    return (
      <div className="items-list common">
        <StickyContainer>
          <Sticky className="sticky-list-filters">
            <div className="col-xs-6 pad-0 list-header">
              <h4> Прочие позиции </h4>
            </div>
            <div className="col-xs-6 pad-0">
              <div className="pull-right">

                <button
                  className={`btn btn-sm ${getButtonClass('computer')}`}
                  onClick={showComputer}>
                  Компьютеры
                </button>

                <button
                  className={`btn btn-sm ${getButtonClass('furniture')}`}
                  onClick={showFurniture}>
                  Мебель
                </button>

                <button
                  className={`btn btn-sm ${getButtonClass('instrument')}`}
                  onClick={showInstrument}>
                  Инструменты и оборудование
                </button>

                <button
                  className={`btn btn-sm ${getButtonClass('all')}`}
                  onClick={showAll}>
                  Все
                </button>

              </div>
            </div>
          </Sticky>
          <table className="table clickable">
            <thead>
              <tr>
                <th className='sorting-th'
                  onClick={() => sort('name')}>Наименование</th>
                <th>Категория</th>
                <th>Примечание</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </StickyContainer>
      </div>
    );
  }
}

export default ItemsList;
