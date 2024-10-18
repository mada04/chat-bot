// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log("children",children)
  const parse = (message) => {
    message=children.props.state.userData.stockExchange
    console.log("mess",message)

    // if (message.includes('hello')) {
    //   actions.handleHello();
    // }
    // if (message.includes('dog')) {
    //   actions.handleDog();
    // }
    // if(children.props.state.checker==="LSE"){

      // actions.handleUserMessage(message);
    // }
    // if(children.props.state.checker==="preference"){

    //   actions.afterAgeMessage();
    // }
//  actions.handleUserMessage(message);



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
