import React from "react";

const FormInput = props => {
  const { firstName, lastName, email, handleChange, submitForm } = props;
  return (
    <form className="form-signin">
      <div className="form-label-group">
        <input
          className="form-control"
          type="text"
          placeholder="first name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-label-group">
        <input
          className="form-control"
          type="text"
          placeholder="last name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-label-group">
        <input
          className="form-control"
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <input type="button" value="Submit" className="btn btn-primary" onClick={submitForm} />
        
    </form>
  );
};

export default FormInput;
