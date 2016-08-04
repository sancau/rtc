import React, { Component } from 'react';

class Test extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
    setInterval(() => {
      if (this.mounted) {
        this.setState({num: this.state.num + 1});
      }
    }, 1000);
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="test">
        <h2>Timer</h2>
        <h2>{this.state.num}</h2>
      </div>
    );
  }
}

export default Test;