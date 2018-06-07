// the fields must me exactly with same name as in schema

import mongoose from 'mongoose';
import authorModel from './model/author';
/*
const fakeData = [
    {
        id: 1,
        name: "JK Rowling",
        age: 50,
        books: ['Harry Potter e a pedra filosofal','Harry Potter e a câmara da morte']
    },
    {
        id: 2,
        name: "George R. R. Martin",
        age: 68,
        books: ['Game Of Thrones','Dace with Dragons', 'Wildcards']
    },
    {
        id: 3,
        name: "J. R. R. Tolkien",
        age: 68,
        books: ['The Lord of the Rings','The Hobbit', 'Silmarilion']
    }
];
*/

// resolvers shows how to go through our schema, and how ro retrieve de data
// the Query "authors" must be defined in the schema too, here we program how to retrieve it
// author is a example of how to create filtrable queries
const resolvers = {
    Query: {
        authors: () => {
            //return fakeData;
        },
        // root is never used, and args holds our filter params
        author: (root, args) => {
            //const id = args.id;
            //return fakeData.find((author) => author.id === id);
        }
    },
    // mutations changes the data states
    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            console.log(name, age, books);
            const author = new authorModel({name: name, age: age, books: books});
            return author.save();
        }
    }
};

export default resolvers;