import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/registerPage';
import Login from './pages/loginPage';
 import CalculatorPage from './pages/calculatorPage';
// import PrivateRoute from 'PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calculator" element={<CalculatorPage />} />
        {/* <Route
              path="/calculator"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<CalculatorPage />}
                />
              }
            /> */}
        {/* <PrivateRoute path="/calculator" element={<CalculatorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


