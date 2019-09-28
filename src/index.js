import React from "react";
import ReactDOM from "react-dom";

import { LoginForm } from './examples/LoginForm/LoginForm'

const Root = () => {
  return (
      <div>
          <h1>Common State</h1>
          <div>
              <strong>Yo!</strong> Here's how you can use Common State to easily share state across many components.
          </div>
          <LoginForm />
      </div>
  );
};

ReactDOM.render(<Root />, document.querySelector("#react-root"));