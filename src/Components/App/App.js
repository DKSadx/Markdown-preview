import React, { Component } from 'react'
import { Editor } from '../index';
import './App.scss';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <p>Makrdown app</p>
        </div>
        <Editor />
      </div>
    )
  }
}
