import React, { useState } from "react";

const SignUpForm = (props) => {
  let { form, onSubmit } = props;

  console.log({ SignUpForm: props });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [address, setAddress] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="form">
      <div>
        <h5>Step 1/3</h5>
        <h1>Sign Up</h1>
      </div>
      <form>
        <div>
          <label className="label">First Name</label>
          <input
            onChange={handleFirstNameChange}
            className="input"
            value={firstName}
            type="text"
          />

          <label className="label">Last Name</label>
          <input
            onChange={handleLastNameChange}
            className="input"
            value={lastName}
            type="text"
          />
        </div>

        <div>
          <label className="label">Date of Birth</label>
          <input
            onChange={handleDateOfBirthChange}
            className="input"
            value={dateOfBirth}
            type="text"
          />

          <label className="label">Email Address</label>
          <input
            onChange={handleEmailAddressChange}
            className="input"
            value={emailAddress}
            type="email"
          />
        </div>

        <label className="label">Address</label>
        <input
          onChange={handleAddressChange}
          className="input"
          value={address}
          type="text"
        />
      </form>

      <button onClick={()=> onSubmit(form++)} className="btn" type="submit">
        Next Step
      </button>
    </div>
  );
};

export default SignUpForm;
