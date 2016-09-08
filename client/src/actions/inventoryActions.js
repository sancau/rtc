
import axios from 'axios';
import Promise from 'bluebird';

const API_URL = 'http://localhost:5000/inventory';

export function filterItems(query) {
  return {
    type: 'FILTER_ITEMS',
    payload: query
  };
}

export function fetchItems() {
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

export function saveDocument(document) {
  return function(dispatch) {
    Promise.coroutine(function* (document) {
      let response =
      yield axios.put(`${API_URL}/${document.type}/${document._id}`, document);
      dispatch({type: 'SAVE_DOCUMENT_FULFILLED', payload: response});
    })(document).catch((err) => {
      dispatch({type: 'SAVE_DOCUMENT_REJECTED', payload: err});
    });
  }
}

export function deleteDocument(document) {
  return function(dispatch) {
    Promise.coroutine(function* (document) {
      let _id = document._id;
      let response =
        yield axios.delete(`${API_URL}/${document.type}/${_id}`);
      dispatch({type: 'DELETE_DOCUMENT_FULFILLED', payload: {response, _id}});
    })(document).catch((err) => {
      dispatch({type: 'DELETE_DOCUMENT_REJECTED', payload: err});
    });
  }
}
