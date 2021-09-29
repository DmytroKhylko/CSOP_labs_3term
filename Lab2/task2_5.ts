// Створіть клас ReferenceItem, який містить:
// a. Строкову властивість title
// b. Числову властивість year
// c. Конструктор c двома параметрами: строковий параметр newTitle, числовий параметр newYear, який в консоль виводить рядок
//  'Creating a new ReferenceItem ...' і ініціалізує поля.
// d. Метод printItem() без параметрів, який нічого не повертає. Цей метод повинен використовувати template string literal 
// і виводити рядок «title was published in year» в консоль.
///////////////////
// class ReferenceItem {
//     title: string;
//     year: Date;
//     constructor(newTitle: string, newYear: Date){
//         console.log("Creating new ReferenceItem...")
//         this.title = newTitle;
//         this.year = newYear;
//     };
//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//     }
// }
// Об'явіть змінну ref і проініціалізіруйте її об'єктом ReferenceItem. 
// Передайте значення параметрів в конструктор. Викличте метод printItem ().
/////////var ref = new ReferenceItem('Lord of the Rings', new Date('1960'));
/////////ref.printItem();

// Закоментуйте конструктор, властивості title і year і реалізуйте створення
//  властивостей через параметри конструктора (title- public, year - private)

class ReferenceItem {
    public static department: string = 'Some department';
    public title: string;
    private year: Date;
    private _publisher: string;
    constructor(newTitle: string, newYear: Date){
        console.log("Creating new ReferenceItem...")
        this.title = newTitle;
        this.year = newYear;
    };
    printItem(): void {
        console.log(`${this.title} from ${ReferenceItem.department} was published in ${this.year}`);
    }
    
    public get publisher() : string {
        return this._publisher.toUpperCase();
    }
    
    public set publisher(v : string) {
        this._publisher = v;
    }
}
// Створіть приватну властивість _publisher: string.
// a. Додайте геттер publisher, який перетворює властивість _publisher в верхній регістр і повертає його.
// b. Додайте сетер publisher, який приймає рядковий параметр newPublisher і встановлює значення властивості _publisher в значення 
// цього параметра.
// c. Проініціалізіруйте властивість ref.publisher будь-яким значенням і виведіть його в консоль. Результат повинен бути в
//  верхньому регістрі.
var ref = new ReferenceItem('Lord of the Rings', new Date('1960'));
ref.publisher = "Some publisher";
console.log(ref.publisher)

// Створіть статичне рядкове властивість department і проініціалізіруйте його будь-яким значенням за замовчуванням. 
// Внесіть зміни в метод printItem () - додайте вивід в консоль цієї властивості. 
ref.printItem();