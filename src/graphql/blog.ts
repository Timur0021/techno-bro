import { gql } from '@apollo/client/core';

export const GET_ARTICLE = gql`
  query GetArticle($slug: String!) {
    blog(input: { slug: $slug }) {
      id
      title
      slug
      description
      status
      image
      image_alt
      image_title
      order
      views_count
      meta_title
      meta_description
      published_at
      categories {
        id
        name
        slug
        status
        order
        meta_title
        meta_description
      }
    }
  }
`;
