// Оголосіть інтерфейс Person, який містить дві властивості - name і email.
interface Person {
    name: string;
    email: string;
}

// Об'явіть інтрефейс Author на основі інтерфейсу Person, який розширює вказаний інтерфейс числоою властивістю numBooksPublished.
interface Author extends Person {
    numBooksPublished: number;
}

// Оголосіть інтерфейс Librarian на основі інтерфейсу Person, який розширює вказаний інтерфейс двома властивостями:
// a. Строкова властивість department
// b. Функція assistCustomer, яка приймає строковий параметр custName і нічого не повертає.
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

// Оголосіть змінну favoriteAuthor використовуючи інтерфейс Author, задайте значення у вигляді літерала об'єкта.
var favoriteAuthor: Author = {name: "Author Name",
                              email: "author.email@email.com",
                              numBooksPublished: 10
                            }

// Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian, задайте значення у вигляді літерала об'єкта. 
var favoriteLibrarian: Librarian = {name: "Librarian Name",
                                    email: "librarian@email.com",
                                    department: "science department",
                                    assistCustomer: (name) => console.log("Hello, I'm " + name + ". How can I help you?")
                                    }
favoriteLibrarian.assistCustomer(favoriteLibrarian.name)