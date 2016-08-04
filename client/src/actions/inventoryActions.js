
export function filterItems(query) {
  return {
    type: 'FILTER_ITEMS',
    payload: query
  };
}

