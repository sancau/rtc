
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

  return function(dispatch) {
    let mergedData = [];
    Promise.coroutine(function* () {
      for (let type of ['systems', 'tools', 'items']) {
        let response = yield axios.get(`${API_URL}/${type}`);
        // add type flag to all the objects to use in UI logic
        let objectsArray = response.data.map((item) => {
            return {...item, type: type};
        });
        mergedData = mergedData.concat(objectsArray);
      }
      dispatch({type: 'FETCH_ITEMS_FULFILLED', payload: mergedData});
    })().catch((err) => {
      dispatch({type: 'FETCH_ITEMS_REJECTED', payload: err});
    });
  }
}
