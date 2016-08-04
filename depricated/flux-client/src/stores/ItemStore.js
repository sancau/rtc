
import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ItemStore extends EventEmitter {
  constructor() {
    super();

    // mock data
    this.allItems = [
      {
        id: 1,
        name: 'react'
      },
      {
        id: 2,
        name: 'angular'
      },
      {
        id: 3,
        name: 'ember'
      },
      {
        id: 4,
        name: 'backbone'
      },
      {
        id: 5,
        name: 'meteor' 
      }
    ]
    this.items = this.allItems;
  }

  filter(query) {
    // some ajax stuff could be here I suppose..
    // or it might be better to move it to a separate module
    this.items = this.allItems.filter((item) => {
      return item.name.indexOf(query) > -1
    }); 
    this.emit('change');
  }

  getItems() {
    return this.items;
  }

  handleAction(action) {
    switch(action.type) {
      case 'FILTER_ITEMS': {
        this.filter(action.payload);
        break;
      }
      default: return;
    }
  }
}

const itemStore = new ItemStore();
dispatcher.register(itemStore.handleAction.bind(itemStore));

export default itemStore;