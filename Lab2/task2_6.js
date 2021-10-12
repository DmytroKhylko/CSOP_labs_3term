// Створіть клас Encyclopedia як нащадка класу ReferenceItem. 
// Додайте одну додаткову числову публічну властивість edition. Використовуйте параметри конструктора.
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
class Encyclopedia extends ReferenceItem {
    constructor(newTitle, newYear, edition) {
        super(newTitle, newYear);
        this.edition = edition;
    }
    printItem() {
        // Перевизначіть метод printItem(). Нехай він робить те, що робив і додатково виводить рядок в консоль «Edition: edition (year)». 
        // Ви отримаєте помилку, що властивість year недоступно.
        //  Щоб воно було доступно змініть модифікатор доступу в класі ReferenceItem на protected.
        console.log(`${this.title} from ${ReferenceItem.department} was published in ${this.year}.\nEdition: ${this.edition}(${this.year})`);
    }
}
// Оголосіть змінну refBook і створіть об'єкт Encyclopedia. Викличте метод printItem ();
var refBook = new Encyclopedia('Lord of the Rings', new Date('1960'), 3);
refBook.printItem();
