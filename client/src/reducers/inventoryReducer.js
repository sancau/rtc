
let initialState = {
  items: [],
  detailsModalVisible: false,
  active: null
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
      window.alert('Сохранено');
      return state;
    }
    case 'SAVE_DOCUMENT_REJECTED': {
      window.alert('Ошибка');
      return state;
    }
    case 'DELETE_DOCUMENT_FULFILLED': {

      window.alert('Удалено');
      return state;
    }
    case 'DELETE_DOCUMENT_REJECTED': {
      window.alert('Ошибка');
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

    default: return state;
  }
}
