import useSWR from 'swr'
import { useState } from 'react'
import _ from 'lodash'

export const useLazySWR = (query) => {
  const [variables, setVariables] = useState()

  const { data } = useSWR(variables && [query, variables])

  const executeQuery = async (parameters) => new Promise((resolve, reject) => {
    if (_.isEqual(parameters, variables)) reject(new Error('Requested twice with the same parameters'))

    setVariables({ ...parameters })

    resolve(data)
  })

  return [executeQuery, data]
}
