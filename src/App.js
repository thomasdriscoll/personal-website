import React from 'react';
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import NavigationBar from './components/molecules/NavigationBar';
import Home from './components/organisms/Home';
import './stylesheets/App.scss';

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
        <Route exact path='/projects' 
          component={() => { 
          window.location.href = 'https://wiki.thomas-driscoll.com'; 
          return null;
        }}
        />          
        
        <Route exact path='/blog'>
            <Blog />
        </Route>        
      </Switch>
      </div>
    </Router>
  );
}

function Blog() {
  return <h2>Blog</h2>;
}

export default App;
