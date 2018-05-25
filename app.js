import express from 'express';
// graphqlExpress is the glue layer between express and graphql server
// graphiqlExpress is a visual query editor to perform queries in graphql server (graphQl client)
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// parse requests body to json is needed for graphql
import bodyParser from 'body-parser';
// handle http requests
const server = express();

// when we have mapped methods in argument, we just "use" them
// this endpoint is our test graphql client
server.use('/graphiql', graphiqlExpress({
    // here we point to graphql server endpoint
    endpointURL: "/graphql"
}));

// the graphql server is handled by apollo-server-express
server.use('/graphql', bodyParser.json(), graphqlExpress({}));

server.listen(4000, () => {
    console.log('Server listening on port 4000.');
});
