import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
   
    <Router>
    <Header />
    {/* <Navbar />
      <div>
          <Route exact path='/' component={About} />
          <Route  path='/About' component={About} />
          <Route  path='/Contact' component={Contact} />
          <Route  path='/Examples' component={Examples} />
    </div> */}
      <Footer /> 
    </Router>
  );
}

export default App;
