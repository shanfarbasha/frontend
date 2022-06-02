import * as React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Signup from "./Pages/signup";



export const Routes = () => {
  return (
    
      <Router>
          <Switch>
            <Route path="/signup"><Signup /></Route>

          </Switch>
      </Router>
  );
}
