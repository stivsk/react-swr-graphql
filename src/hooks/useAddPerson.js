import { ADD_PERSON_MUTATION } from '../apollo/graphql/mutations/person-mutations'
import { useLazySWR } from './useLazySwr'

export const useAddPerson = () => {
  const [executeAddPerson, response] = useLazySWR(ADD_PERSON_MUTATION)

  return {
    addPerson: executeAddPerson,
    newPerson: response?.addPerson
  }
}
