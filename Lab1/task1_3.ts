enum Category { BusinessAnalyst, Developer, Designer, QA, ScrumMaster}

interface MyWorker {
    id: number;
    category: Category;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
}

function getAllworkers(): MyWorker[]{
    let workers: MyWorker[] = [
        {id: 1, category: Category.BusinessAnalyst, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {id: 2, category: Category.Designer, name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {id: 3, category: Category.Developer, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {id: 4, category: Category.QA, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers;
}

function getAllworkersByCategory(category: Category, workers: MyWorker[]): Array<String> {
    let neededWorkers: Array<String> = []; 
    for (let worker of workers) {
       if (worker.category == category) {
            neededWorkers.push(worker.surname + " " + worker.name);
       } 
    }
    return neededWorkers
}

function getDevelopers(developers: Array<String>): void {
    developers.forEach(element => {
       console.log(element) 
    });
};

getDevelopers(getAllworkersByCategory(Category.Developer, getAllworkers()));

function getWorkerByID(id: number): {name: string;
                                     surname: string;
                                     salary: number;                                   
                                    } {
    let workers = getAllworkers();
    let result = workers.find(worker => worker.id === id);
    return {name: result['name'],
            surname: result['surname'],
            salary: result['salary']
 };   
}
console.log(getWorkerByID(2));