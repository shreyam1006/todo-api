import "./App.css";
import SideNav from "./SideNav";
import InputContainer from "./InputContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import AddTodo from './AddTodo'

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/signup">Signup</Link></div>
        <div><Link to="/login">Login</Link></div>
        </nav>
        

        <Switch>
          <Route path="/home">
            <SideNav />
            <InputContainer />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/add">
            <AddTodo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
