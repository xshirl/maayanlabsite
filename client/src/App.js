// src/App.js

// Import react and the component class
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Resource from './components/Resource';
import New from './components/New';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/apps/:id" component={Resource} />
        <Route exact path="/new" component={New} />
      </div>
      </Router>
    )
  }
};

// Export the App component
export default App;