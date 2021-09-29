interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}
interface Author extends Person {
    numBooksPublished: number;
}
// Створіть клас UniversityLibrarian, який реалізує інтерфейс Librarian і реалізуйте всі необхідні властивості.
// Метод assistCustomer повинен виводити в консоль рядок `$ {this.name} is assisting $ {custName}`.
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    };
}
// Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian і проініціалізуйте її за допомогою об'єкта, створеного класом 
// UniversityLibrarian(). Ніяких помилок при цьому не повинно виникати. Проініціалізіруйте властивість name і викличте метод assistCustomer().
var favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "David";
favoriteLibrarian.assistCustomer("Dann");