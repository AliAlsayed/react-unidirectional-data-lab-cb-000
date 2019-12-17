'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    return (
      <li className='sidebar__item'>
        <a className='sidebar__link'>
        </a>
      </li>
    );
  }
}
