import request from 'graphql-request'

export const graphqlFetcher = (query, variables) => request('http://localhost:4000/api/graphql', query, variables)
