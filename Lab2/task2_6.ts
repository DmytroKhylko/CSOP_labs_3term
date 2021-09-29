// Створіть клас Encyclopedia як нащадка класу ReferenceItem. 
// Додайте одну додаткову числову публічну властивість edition. Використовуйте параметри конструктора.
class ReferenceItem {
    public static department: string = 'Some department';
    public title: string;
    protected year: Date;
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

class Encyclopedia extends ReferenceItem {
    public edition: number;
    constructor(newTitle: string, newYear: Date, edition: number){
        super(newTitle, newYear);
        this.edition = edition;
    }
    printItem(): void {
// Перевизначіть метод printItem(). Нехай він робить те, що робив і додатково виводить рядок в консоль «Edition: edition (year)». 
// Ви отримаєте помилку, що властивість year недоступно.
//  Щоб воно було доступно змініть модифікатор доступу в класі ReferenceItem на protected.
        console.log(`${this.title} from ${ReferenceItem.department} was published in ${this.year}.\nEdition: ${this.edition}(${this.year})`);
    }
}
// Оголосіть змінну refBook і створіть об'єкт Encyclopedia. Викличте метод printItem ();
var refBook = new Encyclopedia('Lord of the Rings', new Date('1960'), 3);
refBook.printItem();

