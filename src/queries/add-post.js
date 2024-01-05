import { gql } from '@apollo/client';

const ADD_POST = gql`
  mutation AddPost($input: CreatePostInput!) {
    createPost(input: $input) {
      title
      body
    }
  }
`;

export default ADD_POST;
