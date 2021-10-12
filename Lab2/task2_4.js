// Створіть клас UniversityLibrarian, який реалізує інтерфейс Librarian і реалізуйте всі необхідні властивості.
// Метод assistCustomer повинен виводити в консоль рядок `$ {this.name} is assisting $ {custName}`.
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
    ;
}
// Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian і проініціалізуйте її за допомогою об'єкта, створеного класом 
// UniversityLibrarian(). Ніяких помилок при цьому не повинно виникати. Проініціалізіруйте властивість name і викличте метод assistCustomer().
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "David";
favoriteLibrarian.assistCustomer("Dann");
