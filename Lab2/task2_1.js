// 1. Визначіть інтерфейс Worker, який містить наступні поля:
// a. id - число
// b. name - строка
// c. surname - строка
// d. available - булеан
// e. salary – категория
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
// Внесіть зміни в функцію getAllWorkers (), 
// укажіть тип повертаємого значення, використовуючи оголошену вище інтерфейс Worker. 
// Видаліть тимчасово id в робітниках і дивіться, що з'явиться помилка.
function getAllworkers() {
    let workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.BusinessAnalyst },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.QA },
    ];
    return workers;
}
// Створіть функцію getWorkerByID(), 
// вкажіть тип отримуваного значення, використовуючи оголошений вище інтерфейс. 
// Можливо, понадобиться додати об'єднання типів undefined, оскільки метод find, якщо не знайде елемент, поверне undefined.
function getWorkerByID(id) {
    let workers = getAllworkers();
    let result = workers.find(worker => worker.id === id);
    return result;
}
console.log(getWorkerByID(5));
