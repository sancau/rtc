
import dispatcher from '../dispatcher';

export function filterItems(query) {
  dispatcher.dispatch({
    type: 'FILTER_ITEMS',
    payload: query
  });
}

