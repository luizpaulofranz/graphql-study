import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
// resolvers is where we perform our queries, if we need to
import resolvers from './resolvers'

// that's how we define the data structure to GraphQl Server
// we can define many types
// type Query is a special type, which defines the queries
const typeDefs = `

    type Person {
        name: String
        age: Int
    }

    type Author {
        name: String
        age: Int
        books: [String]
    }

    type Query {
        author: [Author]
        person: [Person]
    }
`
const schema = makeExecutableSchema({typeDefs, resolvers});
// adds fake data to our schema
//addMockFunctionsToSchema({schema});

export default schema;