interface MyWorker {
    name: string;
    surname: string;
    available: boolean;
    salary: number;
}
function getAllworkers(): MyWorker[]{
    let workers: MyWorker[] = [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers;
}

function logFirstAvaliable(workers: MyWorker[]): void{
   console.log(workers.length) 
   console.log("Available workers:")
   for (let worker of workers) {
        if (worker.available == true) {
            console.log(worker.name, worker.surname)
        }
   }
}

logFirstAvaliable(getAllworkers())