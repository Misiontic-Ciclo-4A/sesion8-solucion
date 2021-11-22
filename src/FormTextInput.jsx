/* eslint-disable no-useless-constructor */
import React from "react";
import "./index.css";

function FormTextInput(props) {
  return (
    <fieldset>
      <legend>{props.label}</legend>
      <input type="text" placeholder="Enter a text" onChange={props.onChange} />
    </fieldset>
  );
}

export default FormTextInput;
