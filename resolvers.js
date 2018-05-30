// the fields must me exactly with same name as in schema

const fakeData = [
    {
        name: "JK Rowling",
        age: 50,
        books: ['Harry Potter e a pedra filosofal','Harry Potter e a câmara da morte']
    },
    {
        name: "George R. R. Martin",
        age: 68,
        books: ['Game Of Thrones','Dace with Dragons', 'Wildcards']
    },
    {
        name: "J. R. R. Tolkien",
        age: 68,
        books: ['The Lord of the Rings','The Hobbit', 'Silmarilion']
    }
];

// resolvers shows how to go through our schema, and how ro retrieve de data
// the Query "authors" must be defined in the schema too, here we program how to retrieve it
const resolvers = {
    Query: {
        author: () => {
            return fakeData;
        }
    }
};

export default resolvers;