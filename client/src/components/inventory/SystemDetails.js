
import React, { Component } from 'react';

import DetailsHeader from './DetailsHeader';
import SystemDetailsTable from './SystemDetailsTable';
import SystemForm from './SystemForm';

import { mergeDeep, dateToStr, strToDate } from '../../helpers/utils';

import './ObjectDetails.css';

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
    const model = mergeDeep({}, this.props.system);
    let test = model.tests.slice(-1).pop();
    let date = new Date(test.date);
    model.lastTestDate = dateToStr(date);
    model.sertificate = test.sertificate;

    const onSave = function(model) {
      let date = strToDate(model.lastTestDate);
      let sertificate = model.sertificate;
      let test = model.tests.pop();
      test.date = date;
      test.sertificate = sertificate;
      model.tests.push(test);
      this.props.saveDocument(model);
    }.bind(this);

    const onDelete = function(model) {
      this.props.deleteDocument(model);
    }.bind(this);

    return (
      <div className="system-details object-details">
        <DetailsHeader
          title={this.props.system.name}
          editMode={this.state.editMode}
          onSave={() => onSave(model)}
          onDelete={() => onDelete(model)}
          toggleEditMode={this.toggleEditMode} />
        {
          this.state.editMode ?
          <SystemForm model={model}/> :
          <SystemDetailsTable system={this.props.system} />
        }
      </div>
    );
  }
}

export default SystemDetails;
