
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
      dispatch({type: 'CLOSE_DETAILS'});
      dispatch(fetchItems());
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
      dispatch({type: 'CLOSE_DETAILS'});
      dispatch(fetchItems());
    })(document).catch((err) => {
      dispatch({type: 'DELETE_DOCUMENT_REJECTED', payload: err});
    });
  }
}

export function addDocument(data) {
  return function(dispatch) {
    Promise.coroutine(function* (data) {
      let url = `${API_URL}/${data.type}`;
      let response = yield axios.post(url, data);
      dispatch({type: 'ADD_DOCUMENT_FULFILLED', payload: {response}});
      dispatch({type: 'CLOSE_NEW'});
      dispatch(fetchItems());
    })(data).catch((err) => {
      dispatch({type: 'ADD_DOCUMENT_REJECTED', payload: err});
    });
  }
}

export function showDetails(document) {
  return {
    type: 'SHOW_DETAILS',
    payload: document
  };
}

export function closeDetails() {
  return {
    type: 'CLOSE_DETAILS',
    payload: {}
  };
}

export function showNew() {
  return {
    type: 'SHOW_NEW',
    payload: {}
  };
}

export function closeNew() {
  return {
    type: 'CLOSE_NEW',
    payload: {}
  }
}
