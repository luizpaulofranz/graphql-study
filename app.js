import express from 'express';
const server = express();

server.get('/graphql', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

server.listen(4000, () => {
    console.log('Server listening on port 4000.');
});
