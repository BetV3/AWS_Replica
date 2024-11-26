import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
//import Dashboard from './pages/Dashboard'; // Place the Dashboard import here

const App = () => (
    <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </Router>
);

export default App;