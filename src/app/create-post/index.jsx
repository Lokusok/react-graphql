import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Form from "../../components/form";

import GoBack from "../../containers/go-back";

import { useMutation } from '@apollo/client';
import ADD_POST from "../../queries/add-post";

function CreatePost() {
  const [fields, setFields] = useState({ title: '', body: '' });
  const [addPostMutation, { loading }] = useMutation(ADD_POST);

  const callbacks = {
    submit: async (e) => {
      e.preventDefault();
      await addPostMutation({
        variables: {
          input: {
            title: fields.title,
            body: fields.body,
          }
        }
      });
      alert('Пост был успешно добавлен!');
      setFields({ title: '', body: '' });
    },
    change: (e) => {
      setFields((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
  };

  return (
    <div>
      <GoBack />

      <Header title={'Create post'}>
        <Link to="/">
          Home
        </Link>
      </Header>

      <Form
        fields={fields}
        onSubmit={callbacks.submit}
        onChange={callbacks.change}
        legend={'Create post form'}
        disabled={loading}
      />
    </div>
  );
}

export default CreatePost;
