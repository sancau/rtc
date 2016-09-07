
import React, { Component } from 'react';
import editIcon from '../../images/edit.svg';

import './DetailsHeader.css';

class DetailsHeader extends Component {
  render() {
    return (
      <div className="details-header">
        <h4 className="pull-left">{this.props.title}</h4>
        {
          this.props.editMode ?
          (
            <div className="pull-left edit-buttons">
              <button
                onClick={this.props.onSave}
                className="btn btn-success"> Сохранить </button>
              <button
                onClick={this.props.toggleEditMode}
                className="btn btn-warning"> Отмена </button>
              <button
                onClick={this.props.onDelete}
                className="btn btn-danger"> Удалить запись </button>
            </div>
          ) : <img
            onClick={this.props.toggleEditMode}
            className="pull-left"
            src={editIcon}
            alt="Редактировать"
            title="Редактировать" />
        }
      </div>
    );
  }
}

export default DetailsHeader;
