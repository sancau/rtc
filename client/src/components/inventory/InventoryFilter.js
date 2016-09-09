
import React, { Component } from 'react';

import './InventoryFilter.css'
import clearInputImage from '../../images/cancel.svg';


class InventoryFilter extends Component {
  render() {
    const handleQueryStringChange = (event) => {
      this.props.updateQuery({
        queryString: event.target.value
      });
    };

    const getButtonClass = (type) => {
      return this.props.query.types[type].visible ?
        'btn btn-success btn' : 'btn btn-danger';
    };

    const onButtonClick = (button) => {
      const isLast = (type) => {
        let slice = this.props.query.types[type];
        slice.visible = !slice.visible;
        let counter = 0;
        for (let i of ['systems', 'tools', 'items']) {
          if (this.props.query.types[i].visible) {
            counter++;
          }
        }
        slice.visible = !slice.visible;
        return !(counter > 0);
      };

      let query = Object.assign(this.props.query, {});
      switch (button) {
        case 'all': {
          query = null;
          break;
        }
        case 'systems': {
          if (!isLast('systems')) {
            query.types.systems.visible = !query.types.systems.visible;
          }
          break;
        }
        case 'tools': {
          if (!isLast('tools')) {
            query.types.tools.visible = !query.types.tools.visible;
          }
          break;
        }
        case 'items': {
          if (!isLast('items')) {
            query.types.items.visible = !query.types.items.visible;
          }
          break;
        }
        case 'clearInput': {
          query.queryString = '';
          this.refs.searchInput.value = '';
          break;
        }
        default: return;
      }
      this.props.updateQuery(query);
    };

    return (
      <div className="inventory-filter row">
        <div className="col-xs-4">
          <table className="input-table">
            <tbody>
            <tr>
              <td>
                <input
                  ref="searchInput"
                  className="form-control"
                  onChange={handleQueryStringChange}
                  type="text"
                  placeholder="Поиск" />
              </td>
              <td>
                <img
                  alt="Сброс"
                  title="Сброс"
                  onClick={() => onButtonClick('clearInput')}
                  src={clearInputImage} />
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="col-xs-8">
          <button
            className='btn btn-primary btn pull-right margin-right-0'
            onClick={() => onButtonClick('all')}> Показать всё </button>

          <button
            className={`${getButtonClass('items')} pull-right`}
            onClick={() => onButtonClick('items')}> Другое </button>

          <button
            className={`${getButtonClass('tools')} pull-right`}
            onClick={() => onButtonClick('tools')}> Приборы </button>

          <button
            className={`${getButtonClass('systems')} pull-right`}
            onClick={() => onButtonClick('systems')}> Системы </button>
        </div>
      </div>
    );
  }
}

export default InventoryFilter;
