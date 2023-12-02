import { gql } from '@apollo/client'

export const ALL_USERS = gql`
query {
  allUsers {
    firstname
    lastname
    email
  }
}
`

export const GET_USER = gql`
query findUserByEmail($email: String!) {
  findUser(email: $email) {
    firstname
    lastname
    birthdate
    email
  }
}
`

export const EDIT_USER = gql`
mutation editUser( $firstname: String!, $lastname: String!, $birthdate: String!, $email: String!) {
    editUser(
        firstname: $firstname,
        lastname: $lastname,
        birthdate: $birthdate,
        email: $email
    ) {
        firstname
        lastname
        birthdate
        email
    }
}
`