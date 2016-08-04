
import axios from 'axios';

export function filterItems(query) {
  return {
    type: 'FILTER_ITEMS',
    payload: query
  };
}

export function fetchItems(misc=true, systems=true, tools=true) {
  return function(dispatch) {
    let API_URL = 'http://localhost:5000/inventory';
    axios.get(`${API_URL}/items`)
    .then((response) => {
      dispatch({type: 'FETCH_ITEMS_FULFILLED', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_ITEMS_REJECTED', payload: err});
    });
  }
}

