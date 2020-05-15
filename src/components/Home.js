import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import Button from "@material-ui/core/Button";

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (
      <div>
        <h1>Welcome Home!</h1>
        <Button type="button" variant="contained" color="primary" onClick={this.handleLogout}>Logout</Button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);
