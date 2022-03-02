import React from 'react'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import HomePage from "./HomePage"
import ContactPage from "./ContactPage"
import ServicePage from "./ServicePage"
import AboutUs from "./AboutUs"


/* export default function App(){
  return (
    <div className="app">
      <ContactPage />
    </div>
  ) 
}
 */
export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/About">
            <AboutUs />
          </Route>
          <Route exact path="/Service">
            <ServicePage />
          </Route>
          <Route exact path="/Contact">
            <ContactPage />
          </Route>
        </Switch> 
      </div>

    </Router>
    
    
  );
}

