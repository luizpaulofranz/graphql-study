import mongoose from 'mongoose';
// to generate our unique IDs
import uuid from 'node-uuid';
const schema = mongoose.Schema;

// this schema must be compatible with schema from graphQl
const authorSchema = new schema({
    id: {type: String, default: uuid.v1},
    name: String,
    age: Number,
    books: [String]
});

export default authorSchema;