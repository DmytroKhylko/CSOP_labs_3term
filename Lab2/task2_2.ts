// Визначіть інтерфейс PrizeLogger, який буде описувать тип для функції, що приймає один строковий параметр і нічого не повертає.
type PrizeLogger = (arg0: string) => void;


// Внесіть зміни в інтерфейс Worker: використовуйте оголошений інтерфейс для поля markPrize.
enum Category { BusinessAnalyst, Developer, Designer, QA, ScrumMaster}
interface MyWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    markPrize: PrizeLogger;
}

// Визначіть змінну logPrize використовуя визначений раніше інтерфейс.
//  Створіть функцію, яка задовольняє цьому інтерфейсу, присвойте оголошену змінну. Визовіть функцію.
var logPrize: PrizeLogger = (prize) => console.log(prize);
logPrize("You've got a prize")