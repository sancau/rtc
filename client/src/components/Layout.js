import React, { Component } from 'react';
import { Link } from 'react-router';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Link to="inventory" activeClassName="active">
          <button>Inventory</button>
        </Link>
        <Link to="test" activeClassName="active">
          <button>Test page</button>
        </Link>
        <hr /> 
        {this.props.children}
      </div>
    );
  }
}

export default Layout;