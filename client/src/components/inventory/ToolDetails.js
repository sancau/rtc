
import React, { Component } from 'react';


class ToolDetails extends Component {
  render() {
    return (
      <div className="tool-details">
        <h4>{this.props.tool.name}</h4>
      </div>
    );
  }
}

export default ToolDetails;
