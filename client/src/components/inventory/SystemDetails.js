
import React, { Component } from 'react';

import DetailsHeader from './DetailsHeader';
import SystemDetailsTable from './SystemDetailsTable';
import SystemForm from './SystemForm';

import { mergeDeep } from '../../helpers/utils';

import './SystemDetails.css';

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

    const onSave = function() {
      console.log(model);
    }.bind(this);

    const onDelete = function() {
      console.log('Deleting..');
    }.bind(this);

    return (
      <div className="system-details">
        <DetailsHeader
          title={this.props.system.name}
          editMode={this.state.editMode}
          onSave={onSave}
          onDelete={onDelete}
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
