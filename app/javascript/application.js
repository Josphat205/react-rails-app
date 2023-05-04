// Entry point for the build script in your package.json
import React from "react";
import ReactDOM from "react-dom";
import Greetings from "./components/Greetings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Greetings />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
