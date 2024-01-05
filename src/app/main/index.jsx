import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';

import GET_ALL_POSTS from "../../queries/get-all-posts";
import DELETE_POST from '../../queries/delete-post';

import List from "../../components/list";
import Post from "../../components/post";
import Pagination from "../../components/pagination";
import Status from '../../components/status';
import Error from '../../components/error';
import Header from '../../components/header';
import Loader from '../../components/loader';

const limit = 5;

function Main() {
  const { currentPage = 1 } = useParams();

  const [pages, setPages] = useState(null);
  const { data, loading, error } = useQuery(GET_ALL_POSTS, {
    variables: {
      "options": {
        "paginate": {
          "page": +currentPage,
          "limit": limit
        }
      }
    }
  });
  const [deletePostMutation] = useMutation(DELETE_POST, {
    refetchQueries: [
      GET_ALL_POSTS,
    ]
  });

  const callbacks = {
    deletePost: async (post) => {
      const isRight = confirm(`Вы уверены, что хотите удалить пост с ID = ${post.id}?`);
      if (isRight) {
        await deletePostMutation({ variables: { id: post.id } });
        alert(`Пост с ID = ${post.id} успешно удалён!`);
      }
    },
  };

  const renders = {
    post: (post) => (
      <Post post={post} deletePost={() => callbacks.deletePost(post)} />
    )
  };

  useEffect(() => {
    if (!data) return;

    setPages(Math.ceil(data.posts.meta.totalCount / limit));
  }, [data]);

  return (
    <div>
      <Header title={'Home page'}>
        <Link to="/post/create">
          New post
        </Link>
      </Header>

      {!pages && <Loader />}
      {error && <Error />}

      <Status loading={loading}>
        <List
          elements={data?.posts?.data}
          elementRender={renders.post}
          keyProp={'id'}
        />
      </Status>

      <hr />
      
      <Pagination currentPage={currentPage} totalPages={pages} />
    </div>
  );
}

export default Main;
