import { gql } from '@apollo/client'

export const LOGIN = gql`
    query login($id: ID){
        getUser(id: $id) {
            id, username
        }
    }    
`
