
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Loginpage from './login/loginpage';
import Registerpage from './register/Registerpage';
import Createorder from './createorder/createorder';

function App() {
  return (
    
    <Router>
      <Routes>
      
        <Route exact path='/' element={<Loginpage/>}/>
        <Route exact path='/register' element={<Registerpage/>}/>
        <Route exact path='/createorder' element={<Createorder/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
