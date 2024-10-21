import React, { useState } from 'react';


const CustomMessage = (props) => {

  const [clickedRow, setClickedRow] = useState(null);
  const [disableClick, setDisableClick] = useState(false);

  const selectedOption = (selected) => {
    props.state.userData.code = selected.code;
    props.state.userData.stockExchange = selected.stockExchange;
    props.state.userData.topStocks = selected.topStocks;
    props.actions.createChatBotUserMessage(props.state.userData)
    
 if (!disableClick) {
      setClickedRow(selected.code);  // Save the clicked row code
      setDisableClick(true); // Disable further clicks
    }
   

  }
  return (


    <ul className="list-group menu" style={{ margin: "0px 0px 5px 48px" }}>
      <li className="list-group-item  list-group-item-primary" >Please select a Stock Exchange</li>
      {props.state.data && props.state.data.map((el) => {
        return (<li
          className="list-group-item textColor"
          key={el.code}
          onClick={() => selectedOption(el)}
          style={{
            pointerEvents: disableClick ? 'none' : 'auto',
            cursor: disableClick ? 'default' : 'pointer',
            backgroundColor: clickedRow === el.code ? 'lightblue' : 'white',
          }}
         >{el.stockExchange}</li>)
      })}


    </ul>



  );
};

export default CustomMessage;
