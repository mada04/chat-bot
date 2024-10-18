import React from 'react';
import MyAvatar from './MyAvatar';

const CustomMessage = (props) => {

  const selectedOption = (selected) => {
    props.state.userData.code = selected.code;
    props.state.userData.stockExchange = selected.stockExchange;
    props.state.userData.topStocks = selected.topStocks;
    props.actions.createChatBotUserMessage(props.state.userData)


  }
  return (
    
    
      <ul className="list-group menu"  style={{ margin: "0px 0px 5px 48px" }}>
        <li className="list-group-item  list-group-item-primary" >Please select a Stock Exchange</li>
        {props.state.data && props.state.data.map((el) => {
          return (<li className="list-group-item textColor" key={el.code} onClick={() => selectedOption(el)}>{el.stockExchange}</li>)
        })}


      </ul>
  


  );
};

export default CustomMessage;
