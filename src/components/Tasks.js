import React from "react";
import { connect } from "react-redux";

const Tasks = (props) => {
  return (
    <div>
      <li>{props.state.title}</li>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Tasks);
