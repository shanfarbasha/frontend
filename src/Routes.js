import * as React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
// import HomePage from "./Pages/HomePage";
import LogInPage from "./Pages/loginPage"
import Signup from "./Pages/signup";



export const Routes = () => {
  return (
    
      <Router>
          <Switch>
            {/* <Route path="/"><HomePage /></Route> */}
            <Route path="/signup"><Signup /></Route>
            <Route path="/login"><LogInPage /></Route>

          </Switch>
      </Router>
  );
}
