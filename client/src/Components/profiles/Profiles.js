import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getProfile from '../../actions/profile';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfilesItem';

const Profiles = props => {
  useEffect();

  return (
    <Fragment>
      <h1 class='large text-primary'>Developers</h1>
      <p class='lead'>
        <i class='fab fa-connectdevelop'></i> Browse and connect with developers
      </p>
      <div class='profiles'>
        <div class='profile bg-light'>
          <img
            class='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <div>
            <h2>John Doe</h2>
            <p>Developer at Microsoft</p>
            <p>Seattle, WA</p>
            <a href='profile.html' class='btn btn-primary'>
              View Profile
            </a>
          </div>

          <ul>
            <li class='text-primary'>
              <i class='fas fa-check'></i> HTML
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> CSS
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> JavaScript
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> Python
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> C#
            </li>
          </ul>
        </div>

        <div class='profile bg-light'>
          <img
            class='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <div>
            <h2>John Doe</h2>
            <p>Developer at Microsoft</p>
            <p>Seattle, WA</p>
            <a href='profile.html' class='btn btn-primary'>
              View Profile
            </a>
          </div>

          <ul>
            <li class='text-primary'>
              <i class='fas fa-check'></i> HTML
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> CSS
            </li>
            <li class='text-primary'>
              <i class='fas fa-check'></i> JavaScript
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Profiles.propTypes = {};

export default Profiles;
