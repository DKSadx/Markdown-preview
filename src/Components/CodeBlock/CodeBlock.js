// Syntax highlighting adapted from:
// https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada

import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// theme duetoneDark
import { duotoneDark } from "react-syntax-highlighter/dist/styles/prism";

export class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };
  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={duotoneDark}>
        {value}
      </SyntaxHighlighter >
    );
  }
}