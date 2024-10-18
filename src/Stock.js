import React, { useState } from 'react';

const Stock = (props) => {

  const [selectedOptions, setSelectedOptions] = useState([]);


  const list = props.state.userData.topStocks

  const selectedOption=(selected)=>{
    props.state.stockData.code=selected.code; 
    props.state.stockData.price=selected.price; 
    props.state.stockData.stockName=selected.stockName; 
    props.actions.createChatBotUserMessageStock(props.state.stockData)
 
 }
  return (

    <ul className="list-group menu " style={{ margin: "0px 0px 5px 48px" }} >
      <li className="list-group-item  list-group-item-primary" >Please select a stock</li>
      {list && list.map((el) => {
        return (
          <li className="list-group-item  textColor" key={el.code} onClick={()=>selectedOption(el)} >{el.stockName}</li>
        )
      })}



    </ul>
  );
};

export default Stock;