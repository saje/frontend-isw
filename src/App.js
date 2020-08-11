import React from 'react';
import Home from './Views/Home'
import Nabvar from './Components/Navbar/Nabvar'
import Footer from './Components/Footer/Footer'
import {  BrowserRouter as Router,  Route} from 'react-router-dom';
import './App.css';

import About from './Views/About';
import Admission from './Views/Admission'

function App() {
  return (
    <div className="App">
      <Router>
      <Nabvar></Nabvar>
        <Route
        exact
        path='/'
        component={Home}        />
        <Route
        exact
        path='/about'
        component={About}        />
        <Route
        exact
        path='/admission'
        component={Admission}/>
      </Router>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
