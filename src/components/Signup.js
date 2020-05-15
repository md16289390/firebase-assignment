import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUser } from "../actions";
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { validEmailRegex } from '../utils/regex';

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});

class Signup extends Component {
  state = { 
    username: "", 
    email: "", 
    password: "", 
    errors: {
      username: '',
      email: '',
      password: '',
  } };

  handelChange = ({ target }) => {
    let errors = this.state.errors;
    const { name, value } = target;
    switch (target.name) {
      case 'username': 
        errors.username = 
          value.length < 5
            ? 'User Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});   
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { username, email, password } = this.state;

    dispatch(signupUser({username, email, password}));
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="User Name"
            name="username"
            onChange={this.handelChange}
          />
          {errors.username.length > 0 && 
          <span className={classes.errorText}>{errors.username}</span>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={this.handelChange}
          />
          {errors.email.length > 0 && 
          <span className={classes.errorText}>{errors.email}</span>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={this.handelChange}
          />
          {errors.password.length > 0 && 
          <span className={classes.errorText}>{errors.password}</span>}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSubmit}
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Signup));
