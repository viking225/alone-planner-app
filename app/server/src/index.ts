import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './main.schema'
import {resolvers} from './resolvers/index.ts'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } =  await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`Apollo server started at ${url}`)