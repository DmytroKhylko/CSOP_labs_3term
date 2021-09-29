// 1. Визначіть інтерфейс Worker, який містить наступні поля:
// a. id - число
// b. name - строка
// c. surname - строка
// d. available - булеан
// e. salary – категория
enum Category { BusinessAnalyst, Developer, Designer, QA, ScrumMaster}

interface MyWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    category: Category;
    salary: number;
}

// Внесіть зміни в функцію getAllWorkers (), 
// укажіть тип повертаємого значення, використовуючи оголошену вище інтерфейс Worker. 
// Видаліть тимчасово id в робітниках і дивіться, що з'явиться помилка.

function getAllworkers(): MyWorker[]{
    let workers: MyWorker[] = [
        {id: 1, category: Category.BusinessAnalyst, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {id: 2, category: Category.Designer, name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {id: 3, category: Category.Developer, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {id: 4, category: Category.QA, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers;
}

// Створіть функцію getWorkerByID(), 
// вкажіть тип отримуваного значення, використовуючи оголошений вище інтерфейс. 
// Можливо, понадобиться додати об'єднання типів undefined, оскільки метод find, якщо не знайде елемент, поверне undefined.

function getWorkerByID(id: number): MyWorker | undefined{
    let workers = getAllworkers();
    let result = workers.find(worker => worker.id === id);
    return result;   
}
console.log(getWorkerByID(5))

// Створіть функцію PrintWorker(), яка на вход приймає робітника і виводить в консоль фразу worker.name + worker.surname + 
// ‘got salary’ + worker.salary. Для типа параметра используйте интерфейс Worker

function printWorkder(worker:MyWorker): void{
   console.log(worker.name + worker.surname + "got salary" + worker.salary) 
}