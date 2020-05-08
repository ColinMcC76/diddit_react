import React from 'react';

import './App.css';
import Page from './components/All'
import Dashboard from './components/DashBoard'
import Navbar from './components/NavHeader'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Dashboard/>
    </div>
  );
}

export default App;
