import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Examples';

function App() {
  return (
   <>
    <Header />
    <About />
    <Projects/>
  
    <Footer /> 
     </>
  );
}

export default App;
