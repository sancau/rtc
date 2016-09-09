
import React, { Component } from 'react';
// import { Link } from 'react-router';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <div className='navigation'>
          <a href='http://sqlisp:9000/app'>
            <button className='btn btn-default btn-sm'>Расчёт трудоёмкости</button>
          </a>
        </div>
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
