// Entry point for the build script in your package.json
import React from "react";
import ReactDOM from "react-dom";
import Greetings from "./components/Greetings";
function App() {
  return (
    <div>
      <Greetings />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
