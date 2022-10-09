import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className='header'>
        <a href='/' className='header-title__link'>
          <h1 className='header-title'>Star DB</h1>
        </a>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="/">People</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Planets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Starships</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export { Header };
