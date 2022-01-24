
import './App.css';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import Loginpage from './login/loginpage';
import Registerpage from './register/Registerpage';

function App() {
  return (

    
    <Router>
      <Switch>
        <Route path='/' component={Loginpage}/>
        <Route path='/register' component={Registerpage}/>
      </Switch>
    </Router>
    
  );
}

export default App;
