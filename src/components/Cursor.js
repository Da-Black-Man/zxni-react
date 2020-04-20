import React from 'react';
import { gsap } from 'gsap';

class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outerCursor: '.o-cursor-circle__outer',
      innerCursor: '.o-cursor-circle__inner',
      showCursor: true,
    };
    this.initCursor = this.initCursor.bind(this);
    this.initHovers = this.initHovers.bind(this);
  }

  componentDidMount() {
    const { showCursor } = this.state;
    this.outerCursor = document.querySelector('.o-cursor-circle__outer');
    this.innerCursor = document.querySelector('.o-cursor-circle__inner');
    this.outerCursorBox = this.outerCursor.getBoundingClientRect();
    this.outerCursorSpeed = 0;
    this.clientX = -100;
    this.clientY = -100;
    this.activeCursor = false;
    if (showCursor === true) {
      this.initCursor();
      this.initHovers();
    }
  }

  initCursor() {
    document.documentElement.classList.add('has-custom-cursor');
    const unveilCursor = () => {
      gsap.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY,
      });
      gsap.set(this.outerCursor, {
        x: this.clientX - this.outerCursorBox.width / 2,
        y: this.clientY - this.outerCursorBox.height / 2,
      });
      setTimeout(() => {
        this.outerCursorSpeed = 0.2;
      }, 100);
      this.activeCursor = true;
    };
    document.addEventListener('mousemove', unveilCursor);

    document.addEventListener('mousemove', e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      gsap.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY,
      });
      if (!this.isStuck) {
        gsap.to(this.outerCursor, this.outerCursorSpeed, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2,
        });
      }
      if (this.activeCursor) {
        document.removeEventListener('mousemove', unveilCursor);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  initHovers() {
    const LinkItems = gsap.to(this.outerCursor, 0.5, {
      backgroundColor: '#000000',
      scale: 0.3,
      opacity: 1,
      ease: 'back',
      paused: true,
    });

    const handleMouseEnter = () => {
      this.outerCursorSpeed = 0;
      gsap.set(this.innerCursor, {
        opacity: 0,
      });
      LinkItems.play();
    };

    const handleMouseLeave = () => {
      this.outerCursorSpeed = 0.2;
      gsap.set(this.innerCursor, {
        opacity: 1,
      });
      LinkItems.reverse();
    };

    const mainNavLinks = document.querySelectorAll('.has-custom-cursor a');
    mainNavLinks.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  render() {
    return (
      <div className="o-cursor" data-module-cursor>
        <div className="o-cursor-circle o-cursor-circle__inner"></div>
        <div className="o-cursor-circle o-cursor-circle__outer"></div>
      </div>
    );
  }
}

export default Cursor;
