import React, {Fragment} from 'react';

function InputItems(props) {
  return (
    <Fragment>
        <label htmlFor={props.id}><b>{props.label}</b></label>
          <input 
            id={props.id} 
            type={props.type} 
            placeholder={props.placeholder} 
            onChange={props.change} 
            value={props.value} 
            name={props.name} 
            required>
          </input>
    </Fragment>
  );
}

export default InputItems;
