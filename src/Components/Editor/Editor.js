import React, { Component } from 'react'
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
    this.enableTabs = this.enableTabs.bind(this);
  }
  onChange(e) {
    this.setState({
      input: e.target.value,
      cursorPos: e.target.selectionStart
    });
  }
  // Enables tabs for indenting in textarea
  enableTabs(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      const val = this.state.input
      const cursorPos = e.target.selectionStart
      // const tab = val.slice(0, cursorPos) + '\t' + val.slice(cursorPos, val.length);
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
    // console.log(this.state.cursorPos, this.inputElRef)
    return (
      <>
        <div className="editor">
          <textarea
            ref={this.textareaRef}
            onChange={this.onChange}
            value={input}
            spellCheck={false}
            onKeyDown={this.enableTabs}
          />
        </div>
        <Preview text={input} />
      </>
    );
  }
}