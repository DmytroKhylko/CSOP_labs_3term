// Оголосіть змінну favoriteAuthor використовуючи інтерфейс Author, задайте значення у вигляді літерала об'єкта.
var favoriteAuthor = { name: "Author Name",
    email: "author.email@email.com",
    numBooksPublished: 10
};
// Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian, задайте значення у вигляді літерала об'єкта. 
var favoriteLibrarian = { name: "Librarian Name",
    email: "librarian@email.com",
    department: "science department",
    assistCustomer: (name) => console.log("Hello, I'm " + name + ". How can I help you?")
};
favoriteLibrarian.assistCustomer(favoriteLibrarian.name);
