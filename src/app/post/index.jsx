import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import GET_POST from '../../queries/get-post';
import Comments from '../../components/comments';
import Loader from '../../components/loader';
import Error from '../../components/error';
import GoBack from '../../containers/go-back';

function Post() {
  const { postId } = useParams();
  const { data, loading, error } = useQuery(GET_POST, {
    variables: {
      id: +postId,
    }
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <GoBack />

      <h2>{data.post.title}</h2>
      <p>{data.post.body}</p>

      <Link to={`/post/${data.post.id}/update`} state={{ back: window.location.href }}>
        Modify this post
      </Link>

      <hr />
      <Comments comments={data.post.comments.data} />
    </div>
  );
}

export default Post;
