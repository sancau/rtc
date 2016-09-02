
import React, { Component } from 'react';


class ItemsList extends Component {
  render() {
    const items = this.props.items.map((item, idx) => {
      return (
        <tr key={idx} onClick={() => this.props.onRowClick(item)}>
          <td> {item.name} </td>
          <td> {item.inventoryNumber} </td>
        </tr>
      );
    });

    return (
      <div className="items-list">
        <hr />
        <h4> Прочие позиции </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Инв. номер</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemsList;
