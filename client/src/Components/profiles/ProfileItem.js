import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = props => {
  const {
    profile: {
      user: { _id, name, avatar },
      status,
      company,
      location,
      skills
    }
  } = props;

  return (
    <div className='profile bg-light'>
      <img className='round-img' src={avatar} alt='' />
      <div>
        <h2>{name}</h2>
        <p>
          {status}
          {company && <span>at{company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
