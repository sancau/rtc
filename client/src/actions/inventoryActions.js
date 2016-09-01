
import axios from 'axios';
import Promise from 'bluebird';

export function filterItems(query) {
  return {
    type: 'FILTER_ITEMS',
    payload: query
  };
}

export function fetchItems() {
  let API_URL = 'http://localhost:5000/inventory';
  let urls = ['systems', 'tools', 'items'].map((type) => `${API_URL}/${type}`);

  return function(dispatch) {
    let mergedData = [];
    Promise.coroutine(function* () {
      for (let url of urls) {
        let response = yield axios.get(url);
        mergedData = mergedData.concat(response.data);
      }
      dispatch({type: 'FETCH_ITEMS_FULFILLED', payload: mergedData});
    })().catch((err) => {
      dispatch({type: 'FETCH_ITEMS_REJECTED', payload: err});
    });
  }
}
