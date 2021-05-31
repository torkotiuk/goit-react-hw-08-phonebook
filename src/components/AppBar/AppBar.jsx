import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import NavAuth from '../NavAuth';
import NavUserMenu from '../NavUserMenu';
import authSelectors from '../../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenificated }) => {
  return (
    <header style={styles.header}>
      <Navigation />
      {isAuthenificated ? <NavUserMenu /> : <NavAuth />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenificated: authSelectors.getIsAuthenificated(state),
});

export default connect(mapStateToProps)(AppBar);
