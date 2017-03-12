
import React, { Component } from 'react';

import {
  getValidBefore,
  getTestStatusClassName,
  getLastTestDate,
  getLastTestSertificate } from '../../helpers/inventoryHelpers';

class ToolDetailsTable extends Component {
  render() {
    const tool = this.props.tool;
    const lastTestDate = getLastTestDate(tool);
    const lastTestSertificate = getLastTestSertificate(tool);
    const validBefore = getValidBefore(tool);
    const testStatusClassName = getTestStatusClassName(tool);

    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <td className="fit-content"><strong>Срок поверки</strong></td>
            <td className={testStatusClassName}>{validBefore}</td>
          </tr>
          <tr>
            <td className="fit-content">
            <strong>Инвентарный номер</strong>
            </td>
            <td>{tool.inventoryNumber}</td>
          </tr>
          <tr>
            <td className="fit-content">
            <strong>Заводской номер</strong>
            </td>
            <td>{tool.factoryNumber}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Код</strong></td>
            <td>{tool.code}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Ед. измерения</strong></td>
            <td>{tool.unit}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Стоймость</strong></td>
            <td>{tool.price}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Количество</strong></td>
            <td>{tool.quantity}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Расположение</strong></td>
            <td>{tool.actualPlacement}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Примечание</strong></td>
            <td>{tool.comment}</td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Период поверки (лет)</strong>
            </td>
            <td>{tool.testPeriod}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Производитель</strong></td>
            <td>{tool.manufacturer}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Год выпуска</strong></td>
            <td>{tool.yearOfProduction}</td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Технические характеристики</strong>
            </td>
            <td>{tool.techDetails}</td>
          </tr>
          <tr>
            <td><strong>Дата последней поверки</strong></td>
            <td>{lastTestDate}</td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Номер свидетельства</strong>
            </td>
            <td>{lastTestSertificate}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ToolDetailsTable;
