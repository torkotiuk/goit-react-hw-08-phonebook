import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOper from '../redux/auth/auth-operations';

//styles
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import scss from './RegisterPage.module.scss';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={scss.Container}>
        <h1 className={scss.Title}>Log in page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={scss.form}
          autoComplete="off"
        >
          {/* <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label> */}
          <div className={scss.Items}>
            <TextField
              className={scss.Items}
              id="outlined-basic"
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          {/* <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label> */}
          <div className={scss.Items}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <div className={scss.Btn}>
            <Button type="submit" variant="contained" size="big">
              Log in
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOper.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
