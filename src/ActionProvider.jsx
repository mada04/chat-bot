// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, createClientMessage, setState, children }) => {

  // console.log("ch",children)

  // const initialAction=(value)=>{
  //   const message=createChatBotMessage(`${value.stockExchange}`);
  //   console.log("message",value)
  //   updateState(message,value.code)

  // }
  // const handleUserMessage=(message)=> {
  //   const response = createChatBotMessage(`You selected: ${message.stockExchange}`);
  //   setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, response],
  //   }));
  // }

  const createChatBotUserMessage = (message) => {
    const userMessage = { type: 'user', message: message.stockExchange };
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
    const messager = createChatBotMessage("Please select a stock", {
      withAvatar: true,
      delay: 500,
      widget: 'stock'
    })
    updateState(messager, "value")
  }

  const createChatBotUserMessageStock=(message)=>{
    const userMessage = { type: 'user', message: message.stockName };
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
    const messager = createChatBotMessage("Stock Price of "+`${message.stockName} `+"is "+`${message.price} `+"Please select an option", {
      withAvatar: true,
      delay: 500,
      widget: 'viewFinal'
    })
    updateState(messager, "value")
  }
  // const afterNameMessage = () => {
  //   const message = createChatBotMessage("Let")
  //   updateState(message, "preference")
  // }

  // const afterAgeMessage = () => {
  //   const message = createChatBotMessage("Please select a stock", {
  //     withAvatar: true,
  //     delay: 500,
  //     widget: 'stock'
  //   })
  //   updateState(message, "value")
  // }






  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker
    }))
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {

            // initialAction,
            // handleUserMessage,
            createChatBotUserMessage,
            createChatBotUserMessageStock
            // afterNameMessage,
            // afterAgeMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;