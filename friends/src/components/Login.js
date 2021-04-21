import React from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

class Login extends React.Component {
  
    state = {
        credentials: {
            username:"",
            password:"",
        },
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value,  
            },
        });
    };

    login = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then((res) => {
          window.localStorage.setItem("token", JSON.stringify(res.data.payload));
          this.props.history.push("/protected");
        })
        .catch((err) => console.log(err));
    };

  render() {
    return (
      <div className="Login">
        {this.isLoading ? <h3>Loading data...</h3> : null}
        <form onSubmit={this.login}>
            <input
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;