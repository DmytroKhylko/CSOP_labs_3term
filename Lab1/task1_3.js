var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function getAllworkers() {
    let workers = [
        { id: 1, category: Category.BusinessAnalyst, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { id: 2, category: Category.Designer, name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { id: 3, category: Category.Developer, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { id: 4, category: Category.QA, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}
function getAllworkersByCategory(category, workers) {
    let neededWorkers = [];
    for (let worker of workers) {
        if (worker.category == category) {
            neededWorkers.push(worker.surname + " " + worker.name);
        }
    }
    return neededWorkers;
}
function getDevelopers(developers) {
    developers.forEach(element => {
        console.log(element);
    });
}
;
getDevelopers(getAllworkersByCategory(Category.Developer, getAllworkers()));
function getWorkerByID(id) {
    let workers = getAllworkers();
    let result = workers.find(worker => worker.id === id);
    return { name: result['name'],
        surname: result['surname'],
        salary: result['salary']
    };
}
console.log(getWorkerByID(2));
