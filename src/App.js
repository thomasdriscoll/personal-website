import React from 'react';
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import NavigationBar from './components/molecules/NavigationBar';
import Home from './components/organisms/Home';
import './stylesheets/App.scss';


//Router tutorial: https://reacttraining.com/react-router/web/guides/quick-start
function App() {
  //Consider using react-router-transition for switching between pages
  return (
    <Router>
      <div className='bigDaddyContainer'>
      <NavigationBar />
      <Switch> 
        <Route path="/">
            <Home />
        </Route>
        <Route path="/projects">
            <Projects />
        </Route>
        <Route path="/blog">
            <Blog />
        </Route>
        
    </Switch>
    </div>
    </Router>
  );
}

function Projects() {
  return <h2>Projects</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}

export default App;
