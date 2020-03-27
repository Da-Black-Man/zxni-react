import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Loader from './components/loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Loader />;
  }
}

export default hot(App);
