import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store/index";

function App() {
  return (
    <Provider store={store}>
      <section>
        <Home />
      </section>
    </Provider>
  );
}

export default App;
