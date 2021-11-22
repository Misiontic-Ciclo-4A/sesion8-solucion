import React from "react";
import "./index.css";
import FormTextInput from "./FormTextInput";
import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState(props.title);
  const handleChange = (e) => {
    let target = e.target;
    if (!e.target.value) setTitle(() => ({ value: props.title }));
    else {
      setTitle(() => ({ value: target.value }));
    }
  };

  return (
    <div className="form">
      <h2 className="result">{title.value}</h2>
      <FormTextInput onChange={handleChange} label="Our label" />
    </div>
  );
}

export default Form;
