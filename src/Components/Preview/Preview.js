import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../index';

export class Preview extends Component {
  render() {
    return (
      <div className="preview" >
        <ReactMarkdown
          className="markdown"
          escapeHtml={false}
          source={this.props.text}
          renderers={{ code: CodeBlock }}
        />
      </div>
    );
  }
}
