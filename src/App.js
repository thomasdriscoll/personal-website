import React from 'react';
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import NavigationBar from './components/molecules/NavigationBar';
import Home from './components/organisms/Home';
import './stylesheets/App.scss';
import Resume from './components/organisms/Resume';
import Projects from './components/organisms/Projects';

function App() {
  //Consider using react-router-transition for switching between pages
  return (
    <Router>
      <div className='bigDaddyContainer'>
      <NavigationBar />
      <Switch> 
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/wiki' 
          component={() => { 
          window.location.href = 'https://wiki.thomas-driscoll.com'; 
          return null;
        }}
        />                 
      </Switch>
      </div>
    </Router>
  );
}

export default App;
