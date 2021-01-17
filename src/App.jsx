import React, { useEffect, useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';

import LocomotiveScroll from 'locomotive-scroll';
import { Switch, Route, withRouter } from 'react-router-dom';
import { html } from './utils/environment';
import { isIE } from './utils/is';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './Pages/Main';
import Page from './Pages/Page';

function handlePageLoading() {
  window.addEventListener('load', () => {
    html.classList.remove('is-loading');
    html.classList.add('is-loaded', 'is-ready');
  });
}

const App = (props) => {
  handlePageLoading();
  isIE();
  const scrollContainer = useRef(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let locomotiveScroll;
    locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
    });
    locomotiveScroll.update();

    // Exposing to the global scope
    window.scroll = locomotiveScroll;

    locomotiveScroll.on('scroll', (instance) => {
      const scrollBottom = instance.scroll.y + window.innerHeight;

      console.log(instance);

      instance.scroll.y > 20
        ? html.classList.add('has-scrolled')
        : html.classList.contains('has-scrolled') &&
          html.classList.remove('has-scrolled');

      instance.scroll.y > 300
        ? html.classList.add('has-nav')
        : html.classList.contains('has-nav') &&
          html.classList.remove('has-nav');

      scrollBottom > document.body.clientHeight - 100
        ? html.classList.add('has-scrolled-bottom')
        : html.classList.contains('has-scrolled-bottom') &&
          html.classList.remove('has-scrolled-bottom');

      const totalScroll = instance.scroll.y;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolly = `${totalScroll / windowHeight}`;

      setScroll(scrolly);
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [scroll]);

  return (
    <div className="app__container">
      <main data-namespace="home">
        <Loader />
        <Cursor />
        <Header />
        <div className="o-scroll" ref={scrollContainer}>
          <div className="o-wrap">
            <div id="progressBarContainer">
              <div
                id="progressBar"
                style={{
                  transform: `scale(${scroll}, 1)`,
                  opacity: `${scroll}`,
                }}
              />
            </div>
            <Switch location={props.location}>
              <Route exact path="/" component={Main} />
              <Route path="/page" component={Page} />
            </Switch>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default hot(withRouter(App));
