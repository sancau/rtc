
import React, { Component } from 'react';
import { SkyLightStateless } from 'react-skylight';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import SystemForm from './SystemForm';
import ToolForm from './ToolForm';
import ItemForm from './ItemForm';

class NewObject extends Component {
  constructor() {
    super();
    this.model = {};
    this.state = {
      type: null
    };
    this.onClose = function() {
      this.setState({type: null});
      this.props.close();
    }.bind(this);
  }

  render() {
    const modalStyles = {
      color: '#555',
      width: '90%',
      left: '5%',
      top: '3%',
      height: '95%',
      marginTop: '0',
      marginLeft: '0',
      overflowY: 'auto',
    };

    const typeOptions = [
        { value: 'systems', label: 'Испытательные системы' },
        { value: 'tools', label: 'Приборы и средства измерения' },
        { value: 'items', label: 'Прочие позиции' }
    ];

    const onSelectionChange = (selected) => {
      let val = selected == null ? null : selected.value;
      this.setState({type: val});
      this.model.type = val;
      console.log(this.state);
    }

    return (
      <SkyLightStateless
        onCloseClicked={this.onClose}
        isVisible={this.props.visible}
        dialogStyles={modalStyles}>

        <h4>Новая позиция</h4>
        <hr />
        <Select
          searchable={false}
          placeholder='Выберите тип позиции'
          value={this.state.type}
          options={typeOptions}
          onChange={onSelectionChange}
        />
        <hr />
        {
          this.state.type === 'systems' ?
            <SystemForm model={this.model}/> :
          this.state.type === 'tools' ?
            <ToolForm model={this.model}/> :
          this.state.type === 'items' ?
            <ItemForm model={this.model}/> :
          null
        }
        {
          this.state.type !== null ?
            <button
              className='btn btn-success btn-lg pull-right'
              onClick={() => this.props.addObject(this.model)}>
              Добавить
            </button> : null
        }
      </SkyLightStateless>
    );
  }
}

export default NewObject;
