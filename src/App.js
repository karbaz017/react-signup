import React, { useState } from "react";

import "./App.css";
import NavBar from "./components/navbar";
import SignUpForm from "./components/Form/signUp";
import MessageForm from "./components/Form/message";
import CheckboxForm from "./components/Form/checkbox";

function App() {
  const [page, setPage] = useState(2);

  const handlePage = (page) => {
    console.log({ page });
    setPage(page);
  };

  console.log({ initial: page });

  return (
    <div className="App">
      <header className="App-header">
        <NavBar selected={page} />
        {page === 1 ? (
          <SignUpForm form={page} onSubmit={handlePage} />
        ) : page === 2 ? (
          <MessageForm form={page} onSubmit={handlePage} />
        ): (
          <CheckboxForm form={page} onSubmit={handlePage} />
        )}
      </header>
    </div>
  );
}

export default App;
