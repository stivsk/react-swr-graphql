import { gql } from '@apollo/client'

export const ADD_PERSON_MUTATION = gql`
  mutation($name: String!, $street: String!, $city: String!, $phone: String) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      id,
      name,
      phone,
      address {
        city,
        street
      }
    }
  }
`
