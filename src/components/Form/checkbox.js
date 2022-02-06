import React, { useState } from "react";

const CheckboxForm = (props) => {
  let { form, onSubmit } = props;

  return (
    <div className="form">
      <div>
        <h5>Step 3/3</h5>
        <h1>Checkbox</h1>
      </div>
      <form>
        <div>
          <div>
            <input
              type="checkbox"
              id="1"
              name="Add Option"
              value="Add Option"
            />
            I want to add this option
          </div>
          <div>
            <input
              type="checkbox"
              id="2"
              name="click checkbox"
              value="click checkbox"
            />
            Let me click this checkbox and select some cool stuff
          </div>
        </div>
      </form>

      <div>
        <button onClick={() => onSubmit(form--)} className="btn" type="submit">
          Previous Step
        </button>
        <button onClick={() => onSubmit(form++)} className="btn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CheckboxForm;
