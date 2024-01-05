import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query GetPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          id
          name
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export default GET_ALL_POSTS;