
import React, { Component } from 'react';

class SystemsList extends Component {
  render() {
    const systems = this.props.systems.map((system, idx) => {
      return (
        <tr key={idx}>
          <td> {system.name} </td>
          <td> {system.inventoryNumber} </td>
        </tr>
      );
    });

    return (
      <div className="systems-list">
        <hr />
        <h4> Испытательные системы </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Инв. номер</th>
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
