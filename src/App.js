import React from 'react';
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import NavigationBar from './components/molecules/NavigationBar';
import './stylesheets/App.scss';
import './stylesheets/NavigationBar.scss';


//Router tutorial: https://reacttraining.com/react-router/web/guides/quick-start
function App() {
  return (
    <Router>
      <div>
      <NavigationBar />
      <Switch>
        <Route path="/projects">
            <About />
        </Route>
        <Route path="/blog">
            <Users />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Projects</h2>;
}

function Users() {
  return <h2>Blog</h2>;
}

export default App;
