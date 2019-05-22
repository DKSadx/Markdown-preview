import React, { Component } from 'react'
import { Preview } from '../index';

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  render() {
    const { input } = this.state;
    return (
      <>
        <div className="editor">
          <textarea
            onChange={this.onChange}
            spellCheck={false}
          />
        </div>
        <Preview text={input} />
      </>
    );
  }
}