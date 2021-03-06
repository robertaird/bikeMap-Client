import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginView from '../components/login-component';
import { initiateLogin, initiateLoginDemo } from '../actions/user-actions';

class LoginContainer extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  static propTypes = {
    initiateLogin: PropTypes.func.isRequired,
    initiateLoginDemo: PropTypes.func.isRequired,
    disableButton: PropTypes.bool.isRequired,
  };

  render = () => (
    <LoginView
      disableButton={this.props.disableButton}
      _handlePressAsync={this.props.initiateLogin}
      _handlePressDemo={this.props.initiateLoginDemo}
    />
  );
}

const mapDispatchToProps = {
  initiateLogin,
  initiateLoginDemo,
};

function mapStateToProps(state) {
  return {
    disableButton: state.loginButton.enabled,
  };
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default Login;
