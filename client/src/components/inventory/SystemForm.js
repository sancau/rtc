
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SystemForm extends Component {
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

    const purposeOptions = [
        { value: 'climatic', label: 'Климатические испытания' },
        { value: 'mechanic', label: 'Механические испытания' }
    ];

    const onSelectionChange = (selected) => {
        if (selected == null) {
          this.props.model.purpose = null;
        } else {
          this.props.model.purpose = selected.value;
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
            <td className="fit-content">
              <strong>Заводской номер</strong>
            </td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.factoryNumber}
                onChange={(e) => handleChange(e, 'factoryNumber')}/>
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
          <tr>
            <td className="fit-content">
              <strong>Период аттестации (лет)  (обязательное поле)</strong>
            </td>
            <td>
              <input
                type="number" className="form-control"
                value={this.state.model.testPeriod}
                onChange={(e) => handleChange(e, 'testPeriod')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Производитель</strong></td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.manufacturer}
                onChange={(e) => handleChange(e, 'manufacturer')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Год выпуска</strong></td>
            <td>
              <input
                type="number" className="form-control"
                value={this.state.model.yearOfProduction}
                onChange={(e) => handleChange(e, 'yearOfProduction')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Технические характеристики</strong>
            </td>
            <td>
              <textarea
                className="form-control"
                value={this.state.model.techDetails}
                onChange={(e) => handleChange(e, 'techDetails')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content"><strong>Назначение  (обязательное поле)</strong></td>
            <td>
              <Select
                searchable={false}
                placeholder='Выберите тип испытаний'
                value={this.state.model.purpose}
                options={purposeOptions}
                onChange={onSelectionChange}
              />
            </td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Методика аттестации</strong>
            </td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.testMethod}
                onChange={(e) => handleChange(e, 'testMethod')}/>
            </td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Программа аттестации</strong>
            </td>
            <td>
              <input
                type="text" className="form-control"
                value={this.state.model.testProgram}
                onChange={(e) => handleChange(e, 'testProgram')}/>
            </td>
          </tr>
          <tr>
            <td><strong>Дата последней аттестации (обязательное поле)</strong></td>
            <td>
              <input
              type="text"
              className="form-control"
            placeholder="Ввод даты в формате ДД-ММ-ГГГГ (Например 31-12-2015)"
              value={this.state.model.lastTestDate}
              onChange={(e) => handleChange(e, 'lastTestDate')} />
            </td>
          </tr>
          <tr>
            <td className="fit-content">
              <strong>Номер свидетельства (обязательное поле)</strong>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                value={this.state.model.sertificate}
                onChange={(e) => handleChange(e, 'sertificate')} />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default SystemForm;
