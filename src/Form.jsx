import React from "react";
import "./index.css";
import FormTextInput from "./FormTextInput";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: this.props.title };
  }
  handleChange(e) {
    let target = e.target;
    if (!e.target.value) this.setState(() => ({ value: this.props.title }));
    else {
      this.setState(() => ({ value: target.value }));
    }
  }
  render() {
    return (
      <div className="form">
        <h2 className="result">{this.state.value}</h2>
        <FormTextInput onChange={this.handleChange} label="Our label" />
      </div>
    );
  }
}
