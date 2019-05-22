import React, { PureComponent, Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../index';

export class Preview extends Component {
  constructor(props) {
    super(props);
  }
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
