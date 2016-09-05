
import React, { Component } from 'react';

import './SystemsList.css';

class SystemsList extends Component {
  render() {
    const systems = this.props.systems.map((system, idx) => {

      const validBefore = function(system) {
        let lastTest = system.tests.slice(-1).pop();
        let date = new Date(lastTest.date);
        date.setYear(date.getFullYear() + system.testPeriod);
        return  date.toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }(system);

      const rowClassName = function(system) {
        return 'alert-success';
      }(system);

      return (
        <tr key={idx} onClick={() => this.props.onRowClick(system)}>
          <td> {system.name} </td>
          <td className={rowClassName}> {validBefore} </td>
          <td> {system.comment} </td>
        </tr>
      );
    });

    const querySlice = this.props.query.types.systems;
    const getButtonClass = (type) => {
      return querySlice[type].visible ||
        type === 'all' ? 'btn-success' : 'btn-danger';
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

    return (
      <div className="systems-list">
        <hr />
        <div className="col-xs-6 pad-0">
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
              className='btn btn-sm btn-primary'
              onClick={showAll}>
              Все
            </button>

          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Срок аттестации</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            {systems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SystemsList;
