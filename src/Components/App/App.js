import React, { Component } from 'react'
import { Editor } from '../index';
import './App.scss';
import logo from '../../img/image.png'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <img className="markdown-logo" src={logo} alt="md.logo" />
          <p>Markdown Preview</p>
        </div>
        <Editor />
      </div>
    )
  }
}
