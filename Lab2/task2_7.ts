// Внесіть зміни в клас ReferenceItem - зробіть його абстрактним. Закоментуйте код, який відноситься до змінної ref, 
// оскільки не можна створювати екземпляри абстрактного класу.
abstract class ReferenceItem {
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
    abstract printCitation(): void;
}
// Додайте абстрактний метод printCitation(), який не приймає параметрів і не повертає значення. У цього методу не повинно бути реалізації. 
// Після цього Ви отримаєте помилку в класі Encyclopedia, яка повідомить, що не реалізований абстрактний метод.

class Encyclopedia extends ReferenceItem {
    public edition: number;
    constructor(newTitle: string, newYear: Date, edition: number){
        super(newTitle, newYear);
        this.edition = edition;
    }
    printItem(): void {
        console.log(`${this.title} from ${ReferenceItem.department} was published in ${this.year}.\nEdition: ${this.edition}(${this.year})`);
    }
    // Додайте реалізацію методу printCitation в клас Encyclopedia. Метод повинен виводити в консоль рядок «title - year».
    printCitation(): void{
        console.log(`${this.title} - ${this.year}`)
    }
}
var refBook = new Encyclopedia('Lord of the Rings', new Date('1960'), 3);
refBook.printItem();
refBook.printCitation();