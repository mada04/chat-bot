import React from 'react';

const FinalView = () => {
  const list=[{id:1,option:"Main menu"},{id:2,option:"Go back"}]

  return (

    <ul className="list-group menu " style={{ margin: "0px 0px 5px 48px" }} >
        <li className="list-group-item  list-group-item-primary" >Please select a Stock Exchange</li>
        {list && list.map((el)=>{
            return( <li className="list-group-item textColor" key={el.id} >{el.option}</li>)
        })}


</ul>
      );
};

export default FinalView;