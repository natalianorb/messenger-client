import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser (email: $email, password: $password ) {
      id, email, name
    }
}
`;

export default CREATE_USER;
