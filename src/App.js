import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Footer from './components/footer';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';

import './sass/index.sass';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/about'><About /></Route>
        <Route path='/portfolio'><Portfolio /></Route>
        <Route path='/contact'><Contact /></Route>
        <Route path='/resume'><Resume /></Route>
        <Route path='/'><About /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
