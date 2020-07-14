import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../Dashboard/Dashboard';
import ProfileForm from '../profile-form/ProfileForm';
import AddExperience from '../profile-form/AddExperience';
import AddEducation from '../profile-form/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
// import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = props => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={ProfileForm} />
        <PrivateRoute exact path='/edit-profile' component={ProfileForm} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </section>
  );
};

export default Routes;
