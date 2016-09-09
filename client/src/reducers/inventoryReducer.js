// TEMP solution for popups
// TO BE REVISED
import 'jquery';
import * as toastr from 'toastr';

const options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "200",
  "hideDuration": "500",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

let initialState = {
  items: [],
  detailsModalVisible: false,
  active: null,
  newModalVisible: false
};

export default function reducer(state=initialState, action) {
  const getAdditions = function (item, query) {
    let type = item.type;
    switch (type) {
      case 'systems': {
        return query[item.purpose].visible;
      }
      case 'tools': {
        return true;
      }
      case 'items': {
        return query[item.category].visible;
      }
      default: return true;
    }
  };

  switch (action.type) {
    case 'FILTER_ITEMS': {
      return {
        ...state,
        items: initialState.items.filter((item) => {
          let name = item.name.toLowerCase();
          let queryString = action.payload.queryString.toLowerCase();
          return name.indexOf(queryString) > -1
             && action.payload.types[item.type].visible
             && getAdditions(item, action.payload.types[item.type]);
        })
      };
    }
    case 'FETCH_ITEMS_FULFILLED': {
      initialState.items = action.payload;
      return {
        ...state,
        items: initialState.items
      };
    }
    case 'FETCH_ITEMS_REJECTED': {
      console.error('Error while fetching items..');
      console.error(action.payload);
      return state;
    }
    case 'SAVE_DOCUMENT_FULFILLED': {
      toastr.success('Изменения сохранены', null, options);
      return state;
    }
    case 'SAVE_DOCUMENT_REJECTED': {
      toastr.error('Ошибка', null, options);
      return state;
    }
    case 'DELETE_DOCUMENT_FULFILLED': {
      toastr.warning('Запись удалена', null, options);
      return state;
    }
    case 'DELETE_DOCUMENT_REJECTED': {
      toastr.error('Ошибка', null, options);
      return state;
    }
    case 'ADD_DOCUMENT_FULFILLED': {
      toastr.success('Позиция добавлена', null, options);
      return state;
    }
    case 'ADD_DOCUMENT_REJECTED': {
      toastr.error('Ошибка', null, options);
      return state;
    }
    case 'SHOW_DETAILS': {
      return {
        ...state,
        detailsModalVisible: true,
        active: action.payload
      }
    }
    case 'CLOSE_DETAILS': {
      return {
        ...state,
        active: null,
        detailsModalVisible: false
      }
    }
    case 'SHOW_NEW': {
      return {
        ...state,
        newModalVisible: true
      }
    }
    case 'CLOSE_NEW': {
      return {
        ...state,
        newModalVisible: false
      }
    }

    default: return state;
  }
}
