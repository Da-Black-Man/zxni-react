import React from 'react';

export default () => {
  return (
    <header className="c-header-navigation u-anime -delay-4" id="main__menu">
      <div className="c-header-navigation__content">
        <a className="c-header-navigation__logo" href="/" target="_blank">
          <svg className="c-header-navigation__logo--desktop" role="img">
            <use xlinkHref="#svg-logo"></use>
          </svg>
          <svg className="c-header-navigation__logo--mobile" role="img">
            <use xlinkHref="#svg-logo"></use>
          </svg>
        </a>
        <nav className="c-header-navigation__nav">
          <ul className="c-header-navigation__list">
            <li className="c-header-navigation__item">
              <a className="c-header-navigation__link" href="/">
                Lorem
              </a>
            </li>
            <li className="c-header-navigation__item">
              <a className="c-header-navigation__link" href="/">
                Lorem
              </a>
            </li>
            <li className="c-header-navigation__item">
              <a className="c-header-navigation__link" href="/">
                Lorem
              </a>
            </li>
            <li className="c-header-navigation__item">
              <a className="c-header-navigation__link" href="/">
                Lorem
              </a>
            </li>
            <li className="c-header-navigation__item">
              <a className="c-header-navigation__link" href="/">
                Lorem
              </a>
            </li>
          </ul>
        </nav>
        <div className="c-header-navigation__menu">
          <div className="c-header-navigation__menu-wrap u-vertical-center">
            <button className="c-header-navigation__button" type="button">
              <div>
                <span className="c-header-navigation__button-line"></span>
                <span className="c-header-navigation__button-line"></span>
                <span className="c-header-navigation__button-line"></span>
              </div>
            </button>
          </div>
        </div>
        <div id="c-mega-menu" className="c-mega-menu">
          <div className="c-mega-menu__wrap">
            <ul
              className="c-mega-menu__level"
              aria-label="all"
              role="menu"
              data-menu="main"
            >
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
              <li className="c-mega-menu__item" role="menuitem">
                <a className="c-mega-menu__item-link" href="/">
                  Lorem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="o-overlay"></div>
    </header>
  );
};
