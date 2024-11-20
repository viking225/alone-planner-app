import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

const httpLink = new HttpLink({
  uri: 'https://spacex-production.up.railway.app/'
})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export default client
