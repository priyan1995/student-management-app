import './App.css';
import { Register } from './component/Register';
import { BrowserRouter as Router, Switch, Route, Link, useHistory,Redirect } from "react-router-dom";
import { Home } from './component/Home';
import { Login } from './component/Login';
import { StudentAdd } from './students/StudentAdd';
import StudentList from './students/StudentsList';
import { useEffect, useState } from 'react';

const App = () => {

  const [sessionVal, setSessionVal] = useState();

  useEffect(() => {
    setSessionVal(localStorage.getItem('email'))
  }, [])

  console.log(sessionVal);





  const history = useHistory()

  const deleteSession = () => {
    localStorage.removeItem('email');
    //redirectedToStudentList().
    history.push('/login')





  }

  return (
    <div className="App">

      <Router>





        <Switch>

          {sessionVal ? (
            <>
              <button onClick={deleteSession}>Logout</button>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/create-student">
                <StudentAdd />
              </Route>

              <Route path="/students-list">
                <StudentList />
              </Route>
            </>
          ) : (

            <>
              <Redirect to='/login' />

              <Route path="/login">
                <Login />
              </Route>

       

            </>

          )}









        </Switch>





      </Router>
    </div>
  );
}

export default App;
