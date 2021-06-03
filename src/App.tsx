import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import node from './pages/node'
import stock from './pages/stock';


function App() {
  return (
    <>
      <Router>
          <Route path="/" exact component={node} />
          <Route path="/stock" component={stock} />
      </Router>
    </>
  );
}

export default App;
