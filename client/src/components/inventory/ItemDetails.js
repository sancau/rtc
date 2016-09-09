import React, { Component } from 'react';

import DetailsHeader from './DetailsHeader';
import ItemDetailsTable from './ItemDetailsTable';
import ItemForm from './ItemForm';

import { mergeDeep } from '../../helpers/utils';

import './ObjectDetails.css';

class ItemDetails extends Component {
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
    const model = mergeDeep({}, this.props.item);

    const onSave = function(model) {
      this.props.saveDocument(model);
    }.bind(this);

    const onDelete = function(model) {
      this.props.deleteDocument(model);
    }.bind(this);

    return (
      <div className="item-details object-details">
        <DetailsHeader
          title={this.props.item.name}
          editMode={this.state.editMode}
          onSave={() => onSave(model)}
          onDelete={() => onDelete(model)}
          toggleEditMode={this.toggleEditMode} />
        {
          this.state.editMode ?
          <ItemForm model={model}/> :
          <ItemDetailsTable item={this.props.item} />
        }
      </div>
    );
  }
}

export default ItemDetails;
