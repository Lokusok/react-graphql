import { gql } from "@apollo/client";

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      comments {
        data {
          id
          name
          email
          body
        }
      }
    }
  }
`;

export default GET_POST;