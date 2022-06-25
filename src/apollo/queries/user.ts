import { gql } from '@apollo/client';

export default gql`
  query login($input: LoginInputType!) {
    user(input: $input) {
      email
    }
  }
`;
