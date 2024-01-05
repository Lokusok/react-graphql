import './style.css';

import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <article>
      <h4>
        <i>{comment.email}</i>
      </h4>
      <div>{comment.body}</div>
    </article>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape(),
};

export default Comment;
