import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class NameDisplay extends React.Component {
  render() {
      return <ReactMarkdown className="well-6-right"  source={props.name} />
  }

}
