
import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <h2> Инвентарь </h2>
        <hr /> 
        {this.props.children}
      </div>
    );
  }
}

export default Layout;

// <Link to="inventory" activeClassName="active">
//   <button>Inventory</button>
// </Link>
// <Link to="test" activeClassName="active">
//   <button>Test page</button>
// </Link>