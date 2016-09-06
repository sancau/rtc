
import React, { Component } from 'react';


class SystemDetails extends Component {
  render() {
    const system = this.props.system;
    return (
      <div className="system-details">
        <h4>{system.name}</h4>
        <hr />
        <table className="table table-striped">
          <tbody>
            <tr>
              <td><strong>Инвентарный номер</strong></td>
              <td>{system.inventoryNumber}</td>
            </tr>
            <tr>
              <td><strong>Код</strong></td>
              <td>{system.code}</td>
            </tr>
            <tr>
              <td><strong>Ед. измерения</strong></td>
              <td>{system.unit}</td>
            </tr>
            <tr>
            <td><strong>Стоймость</strong></td>
              <td>{system.price}</td>
            </tr>
            <tr>
              <td><strong>Количество</strong></td>
              <td>{system.quantity}</td>
            </tr>
            <tr>
              <td><strong>Расположение</strong></td>
              <td>{system.actualPlacement}</td>
            </tr>
            <tr>
              <td><strong>Примечание</strong></td>
              <td>{system.comment}</td>
            </tr>
            <tr>
              <td><strong>Период аттестации (лет)</strong></td>
              <td>{system.testPeriod}</td>
            </tr>
            <tr>
              <td><strong>Производитель</strong></td>
              <td>{system.manufacturer}</td>
            </tr>
            <tr>
              <td><strong>Год выпуска</strong></td>
              <td>{system.yearOfProduction}</td>
            </tr>
            <tr>
              <td><strong>Технические характеристики</strong></td>
              <td>{system.techDetails}</td>
            </tr>
            <tr>
              <td><strong>Назначение</strong></td>
              <td>
              {system.purpose === 'climatic' ?
              'Климатические испытания' : 'Механические испытания'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SystemDetails;
