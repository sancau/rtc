
let initialState = {
  items: [
    {
      id: 1,
      name: 'Dog'
    },
    {
      id: 2,
      name: 'Cat'
    },
    {
      id: 3,
      name: 'Rat'
    },
    {
      id: 4,
      name: 'Mouse'
    },
    {
      id: 5,
      name: 'Tiger'
    }
  ],
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'FILTER_ITEMS': {
      return {
        ...state, 
        items: initialState.items.filter((item) => {
          return item.name.indexOf(action.payload) > -1;
        })
      };
    }
    default: return state;
  }
}
