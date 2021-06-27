import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import node from './pages/node'
import stock from './pages/stock';
import polls from './pages/poll'


function App() {
  return (
    <>
      <Router>
          <Route path="/" exact component={node} />
          <Route path="/stock" component={stock} />
          <Route path="/poll" component={polls} />
      </Router>
    </>
  );
}

export default App;
