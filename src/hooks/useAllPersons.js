import useSWR from 'swr'
import { ALL_PERSONS_QUERY } from '../apollo/graphql/queries/person-queries'

export const useAllPersons = () => {
  const { data, error } = useSWR(ALL_PERSONS_QUERY)

  return { allPersons: data.allPersons, error }
}
