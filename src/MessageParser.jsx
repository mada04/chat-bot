// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log("children",children)
  const parse = (message) => {
    // if (message.includes('hello')) {
    //   actions.handleHello();
    // }
    // if (message.includes('dog')) {
    //   actions.handleDog();
    // }
    if(children.props.state.checker==="age"){

      actions.afterNameMessage();
    }
    if(children.props.state.checker==="preference"){

      actions.afterAgeMessage();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;