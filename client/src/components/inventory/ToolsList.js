
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import {
  getValidBefore,
  getTestStatusClassName,
  genericSort } from '../../helpers/inventoryHelpers';

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

    const sort = genericSort.bind(this);

    return (
      <div className="tools-list common">
        <StickyContainer>
          <Sticky className="sticky-list-filters">
            <div className="list-header">
              <h4> Приборы и средства измерения </h4>
            </div>
          </Sticky>
          <table className="table clickable">
            <thead>
              <tr>
                <th className='sorting-th'
                  onClick={() => sort('name')}>Наименование</th>
                <th>Технические характеристики</th>
                <th className='sorting-th'
                  onClick={() => sort('date')}>Срок поверки</th>
                <th>Примечание</th>
              </tr>
            </thead>
            <tbody>
              {tools}
            </tbody>
          </table>
        </StickyContainer>
      </div>
    );
  }
}

export default ToolsList;
