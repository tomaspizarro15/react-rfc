import React from 'react';


const Fields = (props) => {
  return (
    <React.Fragment>
      <p>{props.title}</p>
      <input  type = {props.type}placeholder={props.ph} onChange={props.changed} style={{ border: props.border }} value={props.value}></input>
    </React.Fragment>
  )


}

export default Fields 