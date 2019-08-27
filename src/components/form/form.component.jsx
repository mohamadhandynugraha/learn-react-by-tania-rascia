import React from "react";
import FormInput from "./form-input.component";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.initialstate = {
      firstName: "",
      lastName: "",
      email: ""
    };

    this.state = this.initialstate;
  }

  handleChange = event => {
    const { name, value } = event.target;
    // nanti print [name]
    console.log("[name]:");
    console.log([name]);
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
      this.props.handleSubmit(this.state);
      this.setState(this.initialstate);
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <FormInput
        handleChange={this.handleChange}
        firstName={firstName}
        lastName={lastName}
        email={email}
        submitForm={this.submitForm}
      />
    );
  }
}

export default Form;
