import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import Nav from './components/nav';
import Footer from './components/footer';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/'><About /></Route>
          <Route path='/portfolio'><Portfolio /></Route>
          <Route path='/contact'><Contact /></Route>
          <Route path='/resume'><Resume /></Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
