
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import {
  getValidBefore,
  getTestStatusClassName,
  genericSort } from '../../helpers/inventoryHelpers';

import './SystemsList.css';

class SystemsList extends Component {
  render() {
    const systems = this.props.systems.map((system, idx) => {
      const validBefore = getValidBefore(system);
      const testStatusClassName = getTestStatusClassName(system);
      return (
        <tr key={idx} onClick={() => this.props.onRowClick(system)}>
          <td> {system.name} </td>
          <td className={testStatusClassName}> {validBefore} </td>
          <td> {system.comment} </td>
        </tr>
      );
    });

    const querySlice = this.props.query.types.systems;
    const getButtonClass = (type) => {
      if (type === 'all') {
        return (this.props.query.types.systems.climatic.visible === true &&
          this.props.query.types.systems.mechanic.visible === true) ?
          'btn-success' : 'btn-primary';
      }
      if (this.props.query.types.systems.climatic.visible === true &&
        this.props.query.types.systems.mechanic.visible === true) {
          return 'btn-primary';
      } else {
        return querySlice[type].visible  ?
        'btn-success' : 'btn-primary';
      }
    };

    const showClimatic = () => {
      let newQuery = Object.assign(this.props.query, {});
      newQuery.types.systems.climatic.visible = true;
      newQuery.types.systems.mechanic.visible = false;
      this.props.updateQuery(newQuery);
    };

    const showMechanic = () => {
      let newQuery = Object.assign(this.props.query, {});
      newQuery.types.systems.climatic.visible = false;
      newQuery.types.systems.mechanic.visible = true;
      this.props.updateQuery(newQuery);
    };

    const showAll = () => {
      let newQuery = Object.assign(this.props.query, {});
      newQuery.types.systems.climatic.visible = true;
      newQuery.types.systems.mechanic.visible = true;
      this.props.updateQuery(newQuery);
    };

    const sort = genericSort.bind(this);

    return (
      <div className="systems-list common">
        <StickyContainer>
          <Sticky className="sticky-list-filters">
          <div className="col-xs-6 pad-0 list-header">
            <h4> Испытательные системы </h4>
          </div>
          <div className="col-xs-6 pad-0">
            <div className="pull-right">

              <button
                className={`btn btn-sm ${getButtonClass('climatic')}`}
                onClick={showClimatic}>
                Климатические
              </button>

              <button
                className={`btn btn-sm ${getButtonClass('mechanic')}`}
                onClick={showMechanic}>
                Механические
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
                <th className='sorting-th'
                  onClick={() => sort('date')}>Срок аттестации</th>
                <th>Примечание</th>
              </tr>
            </thead>
            <tbody>
              {systems}
            </tbody>
          </table>
        </StickyContainer>
      </div>
    );
  }
}

export default SystemsList;
