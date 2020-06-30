import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/Components/layout/Navbar';
import Landing from '../src/Components/layout/Landing';
import Register from '../src/Components/Auth/Register';
import Login from '../src/Components/Auth/Login';
import Alert from '../src/Components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
