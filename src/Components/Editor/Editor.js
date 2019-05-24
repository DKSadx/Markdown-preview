import React, { Component } from 'react';
import { Preview } from '../index';

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      cursorPos: 0
    }
    // Creates ref for textarea so that the cursor position can be set
    this.textareaRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.insertTab = this.insertTab.bind(this);
  }
  onChange(e) {
    this.setState({
      input: e.target.value,
      cursorPos: e.target.selectionStart
    });
  }
  insertTab(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      const val = this.state.input;
      const cursorPos = e.target.selectionStart;
      // Inserts tab at the cursor position and moves it one place forward
      this.setState({
        input: val.slice(0, cursorPos) + '\t' + val.slice(cursorPos, val.length),
        cursorPos: cursorPos + 1
      });
      this.setCursor();
    }
  }
  setCursor() {
    this.textareaRef.current.setSelectionRange(this.state.cursorPos, this.state.cursorPos);
  }
  componentDidUpdate() {
    this.setCursor();
  }
  render() {
    const { input } = this.state;
    return (
      <>
        <div className="editor">
          <textarea
            ref={this.textareaRef}
            value={input}
            spellCheck={false}
            placeholder="Insert markdown to convert"
            onChange={this.onChange}
            onKeyDown={this.insertTab}
          />
        </div>
        <Preview text={input} />
      </>
    );
  }
}