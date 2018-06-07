import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
// resolvers is where we perform our queries, if we need to
import resolvers from './resolvers'

// that's how we define the data structure to GraphQl Server
// we can define many types
// type Query is a special type, which defines the queries
// authors returns all, and author is a example of wuery with filters
// mutations defines our inserts/updates/deletes
const typeDefs = `

    type Author {
        id: String
        name: String
        age: Int
        books: [String]
    }

    type Query {
        authors: [Author]
        author(id: String): Author
    }

    type Mutation {
        addAuthor(name: String!, age: Int!, books: [String]!):Author
    }
`
// the ! symbol in mutations indicate required field
const schema = makeExecutableSchema({typeDefs, resolvers});
// adds fake data to our schema
//addMockFunctionsToSchema({schema});

export default schema;