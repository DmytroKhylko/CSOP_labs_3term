enum Category { BusinessAnalyst, Developer, Designer, QA, ScrumMaster}

interface MyWorker {
    category: Category;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
}
function getAllworkers(): MyWorker[]{
    let workers: MyWorker[] = [
        {category: Category.BusinessAnalyst, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {category: Category.Designer, name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {category: Category.Developer, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {category: Category.QA, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers;
}
function getAllworkersByCategory(category: Category, workers: MyWorker[]): Array<String> {
    let neededWorkers: Array<String> = []; 
    for (let worker of workers) {
       if (worker.category == category) {
            neededWorkers.push(worker.surname);
       } 
    }
    return neededWorkers
}

function logWorkersNames(workers: Array<String>): void {
    console.log(workers)
}
logWorkersNames(getAllworkersByCategory(Category.BusinessAnalyst, getAllworkers()))