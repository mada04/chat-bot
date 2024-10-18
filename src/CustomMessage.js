import React from 'react';

const CustomMessage = (props) => {
    console.log("propss",props)
    // const initialAction=()=>{
    //     props.actions.initialAction();
    // }
    const selectedOption=(selected)=>{
       props.state.userData.code=selected.code; 
       props.state.userData.stockExchange=selected.stockExchange; 
       props.state.userData.topStocks=selected.topStocks; 
       props.actions.initialAction()

console.log("selected",selected)
    }
  return (

    <ul className="list-group menu " >
        <li className="list-group-item  list-group-item-primary" >Please select a Stock Exchange</li>
        {props.state.data && props.state.data.map((el)=>{
            return( <li className="list-group-item textColor" key={el.code} onClick={()=>selectedOption(el)}>{el.stockExchange}</li>)
        })}
  {/* 
  <li className="list-group-item textColor" >London Stock Exchange</li>
  <li className="list-group-item textColor">New York Stock Exchange</li>
  <li className="list-group-item textColor">NASDAQ Stock Exchange</li> */}

</ul>
      );
};

export default CustomMessage;
