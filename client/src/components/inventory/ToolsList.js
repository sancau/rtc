
import React, { Component } from 'react';

import {
  getValidBefore,
  getTestStatusClassName } from '../../helpers/inventoryHelpers';

class ToolsList extends Component {
  render() {
    const tools = this.props.tools.map((tool, idx) => {
      const validBefore = getValidBefore(tool);
      const testStatusClassName = getTestStatusClassName(tool);
      return (
        <tr key={idx} onClick={() => this.props.onRowClick(tool)}>
          <td> {tool.name} </td>
          <td> {tool.techDetails} </td>
          <td className={testStatusClassName}> {validBefore} </td>
          <td> {tool.comment} </td>
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
              <th>Технические характеристики</th>
              <th>Срок поверки</th>
              <th>Примечание</th>
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
