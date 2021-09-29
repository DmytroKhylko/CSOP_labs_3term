function createCustomer(name, age, city) {
    if (age && city) {
        return name + " " + age + " " + city;
    }
    if (age) {
        return name + " " + age;
    }
    return name;
}
console.log(createCustomer('David'));
console.log(createCustomer('David', 21));
console.log(createCustomer('David', 21, 'New York'));
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
function getAllworkersByCategory(workers, category = Category.Designer) {
    let neededWorkers = [];
    for (let worker of workers) {
        if (worker.category == category) {
            neededWorkers.push(worker.surname);
        }
    }
    return neededWorkers;
}
function logWorkersNames(workers) {
    console.log(workers);
}
logWorkersNames(getAllworkersByCategory(getAllworkers()));
function logFirstAvaliable(workers = getAllworkers()) {
    console.log(workers.length);
    console.log("Available workers");
    for (let worker of workers) {
        if (worker.available == true) {
            console.log(worker.name, worker.surname);
        }
    }
}
logFirstAvaliable();
function workerIsAvaliable(workerId) {
    return getAllworkers().find(({ id }) => id === workerId)['available'] == true;
}
function getWorkerByID(id) {
    let workers = getAllworkers();
    let result = workers.find(worker => worker.id === id);
    return { name: result['name'],
        surname: result['surname'],
    };
}
function сheckoutWorkers(customer, workerIds) {
    var workers = [];
    workerIds.forEach(workerIds => {
        if (workerIsAvaliable(workerIds)) {
            workers.push(getWorkerByID(workerIds));
        }
    });
    console.log(customer);
    return workers;
}
var workers = сheckoutWorkers('Ann', [1, 2, 4]);
workers.forEach(worker => {
    console.log(worker);
});
