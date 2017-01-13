
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ItemForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({model: this.props.model});
  }

  render() {
    const handleChange = (e, field) => {
      this.props.model[field] = e.target.value;
      this.setState({model: this.props.model});
    };

    const categoryOptions = [
        { value: 'instrument', label: 'Инструменты и оборудование' },
        { value: 'furniture', label: 'Мебель' },
        { value: 'computer', label: 'Компьютерная техника' }
    ];

    const onSelectionChange = (selected) => {
        if (selected == null) {
          this.props.model.category = null;
        } else {
          this.props.model.category = selected.value;
        }
        this.setState({model: this.props.model});
    }

    return (
      <div className="system-form">
      <table className="table table-striped">
        <tbody>
          <tr>
            <td className="fit-content">
              <strong>Наименование (обязательное поле)</strong>
            </td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.name}
                onChange={(e) => handleChange(e, 'name')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Категория (обязательное поле)</strong></td>
            <td>
              <Select
                searchable={false}
                placeholder='Выберите категорию позиции'
                value={this.state.model.category}
                options={categoryOptions}
                onChange={onSelectionChange}
              />
            </td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Инвентарный номер</strong>
            </td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.inventoryNumber}
                onChange={(e) => handleChange(e, 'inventoryNumber')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Код</strong></td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.code}
                onChange={(e) => handleChange(e, 'code')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Ед. измерения (обязательное поле)</strong></td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.unit}
                onChange={(e) => handleChange(e, 'unit')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Стоймость</strong></td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.price}
                onChange={(e) => handleChange(e, 'price')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Количество (обязательное поле)</strong></td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.quantity}
                onChange={(e) => handleChange(e, 'quantity')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Расположение</strong></td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.actualPlacement}
                onChange={(e) => handleChange(e, 'actualPlacement')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Примечание</strong></td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.comment}
                onChange={(e) => handleChange(e, 'comment')}/>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default ItemForm;
