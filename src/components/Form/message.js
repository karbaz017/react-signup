import React, { useState } from "react";

const MessageForm = (props) => {
  let { form, onSubmit } = props;

  console.log({ MessageForm: props });

  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="form">
      <div>
        <h5>Step 2/3</h5>
        <h1>Message</h1>
      </div>
      <form>
        <div>
          <label className="label">Message</label>
          <input
            onChange={handleMessageChange}
            className="input"
            value={message}
            type="text"
          />
        </div>
      </form>

      <div>
        <button onClick={()=>onSubmit(form--)} className="btn" type="submit">
          Previous Step
        </button>
        <button onClick={()=>onSubmit(form++)} className="btn" type="submit">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
