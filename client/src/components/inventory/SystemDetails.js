
import React, { Component } from 'react';

import {
  getValidBefore,
  getTestStatusClassName,
  getLastTestDate,
  getLastTestSertificate } from '../../helpers/inventoryHelpers';

import './SystemDetails.css';
import editIcon from '../../images/edit.svg';

class SystemDetails extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    };

    this.toggleEditMode = function() {
      this.setState({
        editMode: !this.state.editMode
      });
    }.bind(this);
  }

  render() {
    const system = this.props.system;
    const lastTestDate = getLastTestDate(system);
    const lastTestSertificate = getLastTestSertificate(system);
    const validBefore = getValidBefore(system);
    const testStatusClassName = getTestStatusClassName(system);

    const getElement = function(editMode, field, inputType) {
      if (!editMode) {
        return (
          <td>
            {field}
          </td>
        );
      }
      switch (inputType) {
        case 'textarea': {
          return (
            <td>
              <textarea className="form-control" />
            </td>
          );
        }
        default: {
          return (
            <td>
              <input type="text" className="form-control" />
            </td>
          );
        }
      }
    };

    return (
      <div className="system-details">
        <h4 className="pull-left">{system.name}</h4>
        {
          this.state.editMode ?
          (
            <div className="pull-left edit-buttons">
              <button
                className="btn btn-success"> Сохранить </button>
              <button
                onClick={this.toggleEditMode}
                className="btn btn-danger"> Отмена </button>
            </div>
          ) : <img
            onClick={this.toggleEditMode}
            className="pull-left"
            src={editIcon}
            alt="Редактировать"
            title="Редактировать" />
        }

        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="fit-content"><strong>Инвентарный номер</strong></td>
              {getElement(this.state.editMode, system.inventoryNumber)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Код</strong></td>
              {getElement(this.state.editMode, system.code)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Ед. измерения</strong></td>
              {getElement(this.state.editMode, system.unit)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Стоймость</strong></td>
              {getElement(this.state.editMode, system.price)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Количество</strong></td>
              {getElement(this.state.editMode, system.quantity)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Расположение</strong></td>
              {getElement(this.state.editMode, system.actualPlacement)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Примечание</strong></td>
              {getElement(this.state.editMode, system.comment)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Период аттестации (лет)</strong></td>
              {getElement(this.state.editMode, system.testPeriod)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Производитель</strong></td>
              {getElement(this.state.editMode, system.manufacturer)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Год выпуска</strong></td>
              {getElement(this.state.editMode, system.yearOfProduction)}
            </tr>
            <tr>
              <td className="fit-content"><strong>Технические характеристики</strong></td>
              {getElement(this.state.editMode, system.techDetails, 'textarea')}
            </tr>
            <tr>
              <td className="fit-content"><strong>Назначение</strong></td>
              <td>
                {system.purpose === 'climatic' ?
                'Климатические испытания' : 'Механические испытания'}
              </td>
            </tr>
            <tr>
              <td className="fit-content"><strong>Срок аттестации</strong></td>
              <td className={testStatusClassName}>{validBefore}</td>
            </tr>
            <tr>
              <td><strong>Дата последней аттестации</strong></td>
              <td>{lastTestDate}</td>
            </tr>
            <tr>
              <td className="fit-content"><strong>Номер свидетельства</strong></td>
              <td>{lastTestSertificate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SystemDetails;
