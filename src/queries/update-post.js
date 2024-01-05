import { gql } from '@apollo/client';

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      title
      body
    }
  }
`;

export default UPDATE_POST;
