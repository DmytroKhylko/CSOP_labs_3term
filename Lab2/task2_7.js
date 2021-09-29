// Внесіть зміни в клас ReferenceItem - зробіть його абстрактним. Закоментуйте код, який відноситься до змінної ref, 
// оскільки не можна створювати екземпляри абстрактного класу.
class ReferenceItem {
    constructor(newTitle, newYear) {
        console.log("Creating new ReferenceItem...");
        this.title = newTitle;
        this.year = newYear;
    }
    ;
    printItem() {
        console.log(`${this.title} from ${ReferenceItem.department} was published in ${this.year}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(v) {
        this._publisher = v;
    }
}
ReferenceItem.department = 'Some department';
// Додайте абстрактний метод printCitation(), який не приймає параметрів і не повертає значення. У цього методу не повинно бути реалізації. 
// Після цього Ви отримаєте помилку в класі Encyclopedia, яка повідомить, що не реалізований абстрактний метод.
class Encyclopedia extends ReferenceItem {
    constructor(newTitle, newYear, edition) {
        super(newTitle, newYear);
        this.edition = edition;
    }
    printItem() {
        console.log(`${this.title} from ${ReferenceItem.department} was published in ${this.year}.\nEdition: ${this.edition}(${this.year})`);
    }
    // Додайте реалізацію методу printCitation в клас Encyclopedia. Метод повинен виводити в консоль рядок «title - year».
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
var refBook = new Encyclopedia('Lord of the Rings', new Date('1960'), 3);
refBook.printItem();
refBook.printCitation();
