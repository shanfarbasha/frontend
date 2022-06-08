
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import Signup from "./Pages/signup"
import LogInPage from "./Pages/loginPage";
import Checkout from "./Pages/Checkout";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
        main: '#000ff',
        test:'#fdfg'
      },
      secondary: {
        main: '#f44336',
      },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme} >
       <Router>
    <Switch>
        <Route exact path="/" ><HomePage /></Route>
        <Route path="/signup" ><Signup /></Route>
        <Route path="/login" ><LogInPage /></Route>
        <Route path="/checkout" ><Checkout /></Route>
     </Switch>
     </Router>
      
    </ThemeProvider>
  );
}

export default App;
