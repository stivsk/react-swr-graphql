import { gql } from '@apollo/client'

export const ALL_PERSONS_QUERY = gql`
  query {
    allPersons {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`
