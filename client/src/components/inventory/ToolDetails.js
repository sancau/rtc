import React, { Component } from 'react';

import DetailsHeader from './DetailsHeader';
import ToolDetailsTable from './ToolDetailsTable';
import ToolForm from './ToolForm';

import { mergeDeep, dateToStr, strToDate } from '../../helpers/utils';

import './ObjectDetails.css';

class ToolDetails extends Component {
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
    const model = mergeDeep({}, this.props.tool);
    let test = model.tests.slice(-1).pop();
    if (test != null) {
      let date = new Date(test.date);
      model.lastTestDate = dateToStr(date);
      model.sertificate = test.sertificate;
    }

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
      <div className="tool-details object-details">
        <DetailsHeader
          title={this.props.tool.name}
          editMode={this.state.editMode}
          onSave={() => onSave(model)}
          onDelete={() => onDelete(model)}
          toggleEditMode={this.toggleEditMode} />
        {
          this.state.editMode ?
          <ToolForm model={model}/> :
          <ToolDetailsTable tool={this.props.tool} />
        }
      </div>
    );
  }
}

export default ToolDetails;
