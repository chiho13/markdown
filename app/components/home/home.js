import React from 'react';
import ReactMarkdown from 'react-markdown';


var input = '# This is a header\n\nAnd this is a paragraph';

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ' # Github flavoured mark up'
    }
  }

  handleInput(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div className="flex-row">
        <textarea className="form-text well-6-left" type="text" value={this.state.name} onChange={this.handleInput.bind(this)} />
        <NameDisplay  name={this.state.name} />
      </div>
    )
  }  

}
const NameDisplay = (props) =>{
  return <ReactMarkdown className="form-text well-6-right"  source={props.name} />
}
