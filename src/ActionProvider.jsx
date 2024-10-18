// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage,createClientMessage, setState, children }) => {

console.log("ch",children)

  const initialAction=()=>{
    const message=createChatBotMessage("Hello");
    console.log("message",message)
    updateState(message,'age')
  
  }
  const afterNameMessage=()=>{
    const message=createChatBotMessage("Let")
    updateState(message,"preference")
  }
  
  const afterAgeMessage=()=>{
    const message=createChatBotMessage("Please select a stock",{
      withAvatar: true,
            delay: 500,
           widget: 'stock'
    })
    updateState(message,"value")
  }






  const updateState=(message,checker)=>{
    setState((prev)=>({
      ...prev,
      messages:[...prev.messages,message],
      checker
    }))
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            
            initialAction,
            afterNameMessage,
            afterAgeMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;