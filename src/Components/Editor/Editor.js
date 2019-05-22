import React, { Component } from 'react'
import { Preview } from '../index';

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.onChange = this.onChange.bind(this);
    this.enableTabs = this.enableTabs.bind(this);
  }
  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  // Enables tabs for indenting in textarea
  enableTabs(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      const val = this.state.input,
        start = e.target.selectionStart,
        end = e.target.selectionEnd;
      this.setState({
        input: val.substring(0, start) + '\t' + val.substring(end)
      });
    }
  }
  render() {
    const { input } = this.state;
    return (
      <>
        <div className="editor">
          <textarea
            onChange={this.onChange}
            value={this.state.input}
            spellCheck={false}
            onKeyDown={this.enableTabs}
          />
        </div>
        <Preview text={input} />
      </>
    );
  }
}