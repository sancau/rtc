
import React, { Component } from 'react';

import {
  getValidBefore,
  getTestStatusClassName,
  getLastTestDate,
  getLastTestSertificate } from '../../helpers/inventoryHelpers';

class SystemDetailsTable extends Component {
  render() {
    const system = this.props.system;
    const lastTestDate = getLastTestDate(system);
    const lastTestSertificate = getLastTestSertificate(system);
    const validBefore = getValidBefore(system);
    const testStatusClassName = getTestStatusClassName(system);

    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <td className="fit-content"><strong>Срок аттестации</strong></td>
            <td className={testStatusClassName}>{validBefore}</td>
          </tr>
          <tr>
            <td className="fit-content">
            <strong>Инвентарный номер</strong>
            </td>
            <td>{system.inventoryNumber}</td>
          </tr>
          <tr>
            <td className="fit-content">
            <strong>Заводской номер</strong>
            </td>
            <td>{system.factoryNumber}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Код</strong></td>
            <td>{system.code}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Ед. измерения</strong></td>
            <td>{system.unit}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Стоймость</strong></td>
            <td>{system.price}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Количество</strong></td>
            <td>{system.quantity}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Расположение</strong></td>
            <td>{system.actualPlacement}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Примечание</strong></td>
            <td>{system.comment}</td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Период аттестации (лет)</strong>
            </td>
            <td>{system.testPeriod}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Производитель</strong></td>
            <td>{system.manufacturer}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Год выпуска</strong></td>
            <td>{system.yearOfProduction}</td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Технические характеристики</strong>
            </td>
            <td>{system.techDetails}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Назначение</strong></td>
            <td>
            {
              system.purpose === 'climatic' ?
              'Климатические испытания' : 'Механические испытания'
            }
            </td>
          </tr>
          <tr>
            <td className="fit-content">
            <strong>Методика аттестации</strong>
            </td>
            <td>{system.testMethod}</td>
          </tr>
          <tr>
            <td className="fit-content">
            <strong>Программа аттестации</strong>
            </td>
            <td>{system.testProgram}</td>
          </tr>
          <tr>
            <td><strong>Дата последней аттестации</strong></td>
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

export default SystemDetailsTable;
