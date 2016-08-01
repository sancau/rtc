import React, { Component } from 'react';
import { Link } from 'react-router';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Link to="dashboard">
          <button>Index</button>
        </Link>
        <Link to="inventory">
          <button>Inventory</button>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
