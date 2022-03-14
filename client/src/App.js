import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store/index";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";

function App() {
  return (
    <Provider store={store}>
      <section>
        <Home />
      </section>
      {/* <ProSidebar className="side-bar">
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar> */}
    </Provider>
  );
}

export default App;
