import express from 'express';
// graphqlExpress is the glue layer between express and graphql server
// graphiqlExpress is a visual query editor to perform queries in graphql server (graphQl client)
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// parse requests body to json is needed for graphql
import bodyParser from 'body-parser';
// imports the graphql schema definition
import schema from './schema'
import mongoose from 'mongoose';

// handle http requests
const server = express();
// docker run --name mongoGraphql -dit -p 27017:27017 -v mongoDocker:/data/db mongo
mongoose.connect('mongodb://localhost/graphqlTutorial',{
    useMongoClient: true
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Successfully connected with database.');
});

// when we have mapped methods in argument, we just "use" them
// this endpoint is our test graphql client
server.use('/graphiql', graphiqlExpress({
    // here we point to graphql server endpoint
    endpointURL: "/graphql"
}));

// the graphql server is handled by apollo-server-express
server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.listen(4000, () => {
    console.log('Server listening on port 4000.');
});
