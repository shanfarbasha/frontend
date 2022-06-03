import * as React from "react";
import {BrowserRouter,
  Routes,
  Route,} from "react-router-dom";
  import App from "./App"
 import HomePage from "./Pages/HomePage";
import LogInPage from "./Pages/loginPage"
import Signup from "./Pages/signup";



export const Routees = () => {
  return (
    
    <BrowserRouter>
    <Routes>

       <Route path="/" index element={<App />}>
       
         <Route index element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LogInPage />} />
            </Route>
            </Routes>

            </BrowserRouter>
   
  );
}
