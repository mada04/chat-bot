// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

// First part of menu to select stock and display the selected option to user's message

  const createChatBotUserMessage = (message) => {
    const userMessage = { type: 'user', message: message.stockExchange };
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

    //after it is selected ,the following component(widget="stock" in this case) will be displayed  
    const messager = createChatBotMessage("Please select a stock", {
      withAvatar: true,
      delay: 500,
      widget: 'stock'
    })
    // i used a checker to know which side i'm on. In this case checker is stock
    updateState(messager, "stock") 
  }


  // Second part of menu to select stockExchange and display the selected option to user's message
  const createChatBotUserMessageStock=(message)=>{
    const userMessage = { type: 'user', message: message.stockName };
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));

     //after it is selected ,the following component(widget="viewFinal" in this case) will be displayed  

    const messager = createChatBotMessage("Stock Price of "+`${message.stockName} `+"is "+`${message.price} `+"Please select an option", {
      withAvatar: true,
      delay: 500,
      widget: 'viewFinal'
    })

        // i used a checker to know which side i'm on. In this case checker is stockExchange
    updateState(messager, "stockExchange")
  }






// function update for checker
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
            createChatBotUserMessage,
            createChatBotUserMessageStock
          
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;