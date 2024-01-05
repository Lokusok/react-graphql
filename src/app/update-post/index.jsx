import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../components/header";
import Form from "../../components/form";

import { useQuery, useMutation } from '@apollo/client';
import UPDATE_POST from "../../queries/update-post";
import GET_POST from "../../queries/get-post";
import GoBack from "../../containers/go-back";

function UpdatePost() {
  const { postId } = useParams();
  const [fields, setFields] = useState({ title: '', body: '' });
  const { data, loading: isQueryLoading } = useQuery(GET_POST, {
    variables: {
      id: +postId,
    }
  });
  const [updatePostMutation, { loading }] = useMutation(UPDATE_POST, {
    refetchQueries: [
      GET_POST,
      'GetPost'
    ],
  });

  const callbacks = {
    submit: async (e) => {
      e.preventDefault();
      await updatePostMutation({
        variables: {
          id: +postId,
          input: {
            title: fields.title,
            body: fields.body,
          }
        }
      });
      alert('Пост успешно обновлён!');
    },
    change: (e) => {
      setFields((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
  };

  useEffect(() => {
    if (isQueryLoading) return;

    setFields({ title: data.post.title, body: data.post.body });
  }, [data]);

  return (
    <div>
      <GoBack />
      
      <Header title={`Update post №${postId}`}>
        <Link to="/">
          Home
        </Link>
      </Header>

      <Form
        fields={fields}
        onSubmit={callbacks.submit}
        onChange={callbacks.change}
        legend={'Update post form'}
        disabled={loading || isQueryLoading}
      />
    </div>
  );
}

export default UpdatePost;
