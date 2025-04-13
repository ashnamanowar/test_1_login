import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Login from './components/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/" 
            element={isAuthenticated ? <EmployeeList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/add" 
            element={isAuthenticated ? <AddEmployee /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/edit/:id" 
            element={isAuthenticated ? <EditEmployee /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
