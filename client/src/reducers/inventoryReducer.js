
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
          let query = action.payload.toLowerCase();
          return name.indexOf(query) > -1;
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
      console.error('Error while fetching items..'); // TEMP
      return state;
    }    

    default: return state;
  }
}
