import React from "react";
import "./index.css";

export default class FormTextInput extends React.Component {
  //class constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>Our label</legend>
        <input
          type="text"
          placeholder="Enter a text"
          onChange={this.props.onChange}
        />
      </fieldset>
    );
  }
}
