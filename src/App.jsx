import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { html } from './utils/environment';
import { isIE } from './utils/is';
import Loader from './components/Loader';
import Guides from './components/Guides';

function handlePageLoading() {
  window.addEventListener('load', () => {
    html.classList.remove('is-loading');
    html.classList.add('is-loaded', 'is-ready');
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    handlePageLoading();
    isIE();
  }

  render() {
    return (
      <div className="app__container">
        <Loader />
        <Guides />
      </div>
    );
  }
}

export default hot(App);
