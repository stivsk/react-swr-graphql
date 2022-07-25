import useSWR from 'swr'
import { ALL_PERSONS_QUERY } from '../apollo/graphql/queries/person-queries'
import { useLazySWR } from './useLazySwr'

export const useAllPersons = () => {
  const { data, error } = useSWR(ALL_PERSONS_QUERY)

  return { allPersons: data.allPersons, error }
}

export const useLazyAllPersons = () => {
  const [executeAllPersons, response] = useLazySWR(ALL_PERSONS_QUERY)

  return { executeAllPersons, response }
}
