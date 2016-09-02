
import React, { Component } from 'react';

class ToolsList extends Component {
  render() {
    const tools = this.props.tools.map((tool, idx) => {
      return (
        <tr key={idx}>
          <td> {tool.name} </td>
          <td> {tool.inventoryNumber} </td>
        </tr>
      );
    });

    return (
      <div className="tools-list">
        <hr />
        <h4> Приборы и средства измерения </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Инв. номер</th>
            </tr>
          </thead>
          <tbody>
            {tools}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToolsList;
