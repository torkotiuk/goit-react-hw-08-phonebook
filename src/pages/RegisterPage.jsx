import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOper from '../redux/auth/auth-operations';
// import axios from 'axios';

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

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // axios
    //   .post('https://connections-api.herokuapp.com/users/signup')
    //   .then(response => {
    //     console.log(response);
    //   });

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Register page</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

// register --- was taken from operations
// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(register(data)),
// });
// short form of previous 3 lines
const mapDispatchToProps = {
  onRegister: authOper.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
// export default RegisterPage;
