import { ADD_PERSON_MUTATION } from '../apollo/graphql/mutations/person-mutations'
import { useLazySWR } from './useLazySwr'

// const [cretePerson, { data, loading, error }] = useMutation(ADD_PERSON_MUTATION)
// const addPerson = ({ name, phone, street, city }) =>
//   cretePerson({
//     variables: {
//       name,
//       phone,
//       street,
//       city
//     }
//   })

export const useAddPerson = () => {
  const [executeAddPerson, response] = useLazySWR(ADD_PERSON_MUTATION)

  return {
    addPerson: executeAddPerson,
    newPerson: response?.addPerson
  }
}
