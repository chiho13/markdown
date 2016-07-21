import React from 'react';
import Message from './message';

export default class About extends React.Component {
  
  render() {
    return (
      <div>
        <h2>About</h2>
         <Message message="This is my message to you" />
      </div>
    );
  }
}
