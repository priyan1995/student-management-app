import './App.css';
import { Register } from './component/Register';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './component/Home';
import { Login } from './component/Login';

function App() {
  return (
    <div className="App">
      <Router>



        <Switch>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login  />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>



        </Switch>





      </Router>
    </div>
  );
}

export default App;
