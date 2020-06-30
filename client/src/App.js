import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/Components/layout/Navbar';
import Landing from '../src/Components/layout/Landing';
import Register from '../src/Components/Auth/Register';
import Login from '../src/Components/Auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;