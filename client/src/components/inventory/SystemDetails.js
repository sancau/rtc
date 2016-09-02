
import React, { Component } from 'react';


class SystemDetails extends Component {
  render() {
    return (
      <div className="system-details">
        <h4>{this.props.system.name}</h4>
      </div>
    );
  }
}

export default SystemDetails;
