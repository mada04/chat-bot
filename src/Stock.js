import React, { useState } from 'react';

const Stock = (props) => {

  const selectedOptions = props.state.userData.topStocks;

  const [clickedRow, setClickedRow] = useState(null);
  const [disableClick, setDisableClick] = useState(false);


  const selectedOption = (selected) => {

    props.state.stockData.code = selected.code;
    props.state.stockData.price = selected.price;
    props.state.stockData.stockName = selected.stockName;

    props.actions.createChatBotUserMessageStock(props.state.stockData)
    if (!disableClick) {
      setClickedRow(selected.code);  // Save the clicked row code
      setDisableClick(true); // Disable further clicks
    }

  }
  return (

    <ul className="list-group menu " style={{ margin: "0px 0px 5px 48px" }} >
      <li className="list-group-item  list-group-item-primary" >Please select a stock</li>
      {selectedOptions && selectedOptions.map((el) => {
        return (
          <li className="list-group-item  textColor"
            key={el.code}
            onClick={() => selectedOption(el)}
            style={{
              pointerEvents: disableClick ? 'none' : 'auto',
              cursor: disableClick ? 'default' : 'pointer',
              backgroundColor: clickedRow === el.code ? 'lightblue' : 'white',
            }} >{el.stockName}</li>
        )
      })}



    </ul>
  );
};

export default Stock;