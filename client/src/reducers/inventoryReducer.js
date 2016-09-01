
let initialState = {
  items: []
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'FILTER_ITEMS': {
      return {
        ...state,
        items: initialState.items.filter((item) => {
          let name = item.name.toLowerCase();
          let queryString = action.payload.queryString.toLowerCase();
          let typesIncluded = action.payload.types;
          return name.indexOf(queryString) > -1
                 && typesIncluded[item.type];
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

    default: return state;
  }
}
