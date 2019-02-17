import React from 'react';
import {Link} from 'react-router';

class LoginPage extends React.Component {


  render() {

    return (

      <div className="wrapper login">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" name="username" placeholder="Email Address" required=""
                 autoFocus=""/>
          <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
          </label>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
