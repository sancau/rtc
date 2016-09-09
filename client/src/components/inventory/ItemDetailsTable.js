
import React, { Component } from 'react';

class ItemDetailsTable extends Component {
  render() {
    const item = this.props.item;

    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <td className="fit-content"><strong>Категория</strong></td>
            <td>
            {
              item.category === 'furniture' ?
              'Мебель' : item.category === 'instrument' ?
              'Инструменты и оборудование' : 'Компьютерная техника'
            }
            </td>
          </tr>
          <tr>
            <td className="fit-content">
            <strong>Инвентарный номер</strong>
            </td>
            <td>{item.inventoryNumber}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Код</strong></td>
            <td>{item.code}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Ед. измерения</strong></td>
            <td>{item.unit}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Стоймость</strong></td>
            <td>{item.price}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Количество</strong></td>
            <td>{item.quantity}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Расположение</strong></td>
            <td>{item.actualPlacement}</td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Примечание</strong></td>
            <td>{item.comment}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ItemDetailsTable;
