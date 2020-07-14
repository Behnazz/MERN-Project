import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-redux';
import Moment from 'react-moment';
import { connect } from 'react-router-dom';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = props => {
  const {
    addLike,
    removeLike,
    deletePost,
    auth,
    post: { _id, text, name, avatar, user, likes, comments, date },
    showActions
  } = props;

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to='/profile'>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p class='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <button
              type='button'
              className='btn btn-light'
              onClick={() => addLike(_id)}
            >
              <i className='fas fa-thumbs-up'></i>
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              type='button'
              className='btn btn-light'
              onClick={() => removeLike(_id)}
            >
              <i className='fas fa-thumbs-down'></i>
            </button>
            <Link to='/post' className='btn btn-primary'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => deletePost(_id)}
              >
                <i className='fas fa-times'></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state = {
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
