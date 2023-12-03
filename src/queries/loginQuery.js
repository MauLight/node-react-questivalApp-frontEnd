import { gql } from '@apollo/client'

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        email
        firstname
        lastname
    }
}
`

export const SIGNUP = gql`
mutation signUp($firstname: String!, $lastname: String!, $birthdate: String!, $email: String!, $password: String!) {
    signUp(firstname: $firstname, lastname: $lastname, birthdate: $birthdate, email: $email, password: $password) {
        firstname
        lastname
    }
}
`