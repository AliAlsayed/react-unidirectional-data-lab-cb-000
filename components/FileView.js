'use strict'

import React from 'react';
import Toolbar from './Toolbar';

export default class FileView extends React.Component {
  render() {
    return (
      <div className='file-view'>
        <Toolbar />
        <textarea className='file-view__text'>{this.props.file}</textarea>
      </div>
    );
  }
}
