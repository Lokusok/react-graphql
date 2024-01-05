import './style.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function Post({ post, deletePost }) {
  return (
    <article className='Post'>
      <h3>{post.title}</h3>

      <div className='Post-entities'>
        <Link to={`/post/${post.id}`} state={{ back: window.location.href }}>
          Read this post
        </Link>

        <button onClick={deletePost}>Delete post</button>
      </div>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape(),
  deletePost: PropTypes.func,
};

export default Post;
