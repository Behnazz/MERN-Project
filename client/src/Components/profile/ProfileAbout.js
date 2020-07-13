import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = props => {
  const {
    profile: {
      bio,
      skills,
      user: { name }
    }
  } = props;
  return (
    <div class='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 class='text-primary'>{name}</h2>
        </Fragment>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed doloremque
        nesciunt, repellendus nostrum deleniti recusandae nobis neque modi
        perspiciatis similique?
      </p>
      <div class='line'></div>
      <h2 class='text-primary'>Skill Set</h2>
      <div class='skills'>
        <div class='p-1'>
          <i class='fa fa-check'></i> HTML
        </div>
        <div class='p-1'>
          <i class='fa fa-check'></i> CSS
        </div>
        <div class='p-1'>
          <i class='fa fa-check'></i> JavaScript
        </div>
        <div class='p-1'>
          <i class='fa fa-check'></i> Python
        </div>
        <div class='p-1'>
          <i class='fa fa-check'></i> C#
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {};

export default ProfileAbout;
