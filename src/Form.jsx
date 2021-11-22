import React from "react";
import "./index.css";
import FormTextInput from "./FormTextInput";
import { useState } from "react";

function Form(props) {
  const [value, setValue] = useState(props.title);
  const handleChange = (e) => {
    let target = e.target;
    if (!e.target.value) setValue(() => ({ value: props.title }));
    else {
      setValue(() => ({ value: target.value }));
    }
  };

  return (
    <div className="form">
      <h2 className="result">{value.value}</h2>
      <FormTextInput onChange={handleChange} label="Our label" />
    </div>
  );
}

export default Form;
