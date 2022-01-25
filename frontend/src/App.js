
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

import Loginpage from './login/loginpage';
import Registerpage from './register/Registerpage';

function App() {
  return (
    
    <Router>
      <Routes>
      
        <Route exact path='/' element={<Loginpage/>}/>
        <Route exact path='/register' element={<Registerpage/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
