import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const graphqlHttpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: graphqlHttpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export default client
