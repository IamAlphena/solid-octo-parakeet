import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Examples from './Components/Examples';
import Navbar from './Components/Navbar';

function App() {
  return (
   <>
   <Router>
    <Header />
    <Navbar />
    <div>
          <Route exact path='/' component={About} />
          <Route  path='/About' component={About} />
          {/* <Route  path='/Contact' component={Contact} /> */}
          {/* <Route  path='/Examples' component={Examples} /> */}
      </div>

    {/* <About /> */}
    <div className="spacer"></div>
    <Examples/>
  
    <Footer /> 
    </Router>
     </>
  );
}

export default App;
