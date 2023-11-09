import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'; // Import useNavigate

import LoginForm from './LoginForm';
import HomePage from './HomePage';
import SignupForm from './SignupForm'

function App() {
  //const navigate = useNavigate(); // Get the navigate function

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<LoginForm />} />
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/SignupForm" exact element={<SignupForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
