import React, { Component } from 'react'
import Markdown from 'react-markdown';
import './App.css';


export default class App extends Component {
  render() {
    let src = "## codeee"
    return (
      <div>
        <Markdown source={src} />
      </div>
    )
  }
}
