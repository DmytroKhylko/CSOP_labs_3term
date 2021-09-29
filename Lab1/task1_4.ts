function createCustomerID(name: string, id: number): string {
    return name + " " + id;
}

var myID: string = createCustomerID('Ann', 10);
console.log(myID);

var IdGenerator = (name: string, id: number) => {return name + " " + id};
console.log(IdGenerator('Ann', 10))
