import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import { Provider } from "react-redux";
import store from "./redux/store/index";
function App() {
  const [taskArray, setTaskArray] = useState([]);

  return (
    <Provider store={store}>
      <section>
        <Home />

        <div>
          <Tasks data={taskArray} />
        </div>
      </section>
    </Provider>
  );
}

export default App;
