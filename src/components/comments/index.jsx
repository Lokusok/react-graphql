import './style.css';

import List from '../list';
import Comment from '../comment';

import PropTypes from 'prop-types';

function Comments({ comments }) {
  const renders = {
    item: (comment) => (
      <Comment comment={comment} />
    ),
  };

  return (
    <List
      elements={comments}
      elementRender={renders.item}
      keyProp={'id'}
    />
  );
}

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
