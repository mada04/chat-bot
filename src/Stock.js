import React from 'react';

const Stock = (props) => {
  const list = [{ id: "1", value: "CRODA" },
  { id: "2", value: "GSK" },
  { id: "3", value: "ANTOFAGASTA" },
  { id: "4", value: "FLUTTER ENTERTAINMENT" },
  { id: "5", value: "BARBATT DEVELOPMENT" }]
  const openValue=(el)=>{
    props.actions.afterAgeMessage();
}
  return (

    <ul className="list-group menu ">

      {list && list.map((el) => {
        return (
          <li className="list-group-item  list-group-item-primary" key={el.id} onClick={()=>openValue(el.value)} >{el.value}</li>
        )
      })}



    </ul>
  );
};

export default Stock;