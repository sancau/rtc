
import React, { Component } from 'react';


class ItemDetails extends Component {
  render() {
    return (
      <div className="item-details">
        <h4>{this.props.item.name}</h4>
      </div>
    );
  }
}

export default ItemDetails;
