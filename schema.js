import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

// assim definimos a estrutura de dados para o servidor GraphQl
const typeDefs = `
    type Author {
        age: Int
        name: String
        Books: [String]
    }

    type Query {
        author: [Author]
    }
`
const schema = makeExecutableSchema({typeDefs});
// adicionamos dados fake no nosso schema declarado acima
addMockFunctionsToSchema({schema});

export default schema;