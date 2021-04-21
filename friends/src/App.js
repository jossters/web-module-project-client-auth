import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendsList";

import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <ul>
        <li><Link to="/">
          Home</Link></li>
          <li><Link to="/login">
          Login</Link></li>
          <li><Link to="/login">
          Logout</Link></li>
        </ul>
        <h1>Welcome</h1>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList}/>
          <Route path="/login" component={Login}/>
          <Route render={(props) => <Login {...props} /> } />
        </Switch>
      </header>
    </div>
  </Router>  
  );
}

export default App;
