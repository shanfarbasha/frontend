
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import Signup from "./Pages/signup"
import LogInPage from "./Pages/loginPage"

function App() {
  return (
    <div >
       <Router>
    <Switch>
        <Route exact path="/" ><HomePage /></Route>
        <Route path="/signup" ><Signup /></Route>
        <Route path="/login" ><LogInPage /></Route>
     </Switch>
     </Router>
      
    </div>
  );
}

export default App;
