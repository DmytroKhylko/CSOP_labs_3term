function createCustomerID(name, id) {
    return name + " " + id;
}
var myID = createCustomerID('Ann', 10);
console.log(myID);
var IdGenerator = (name, id) => { return name + " " + id; };
console.log(IdGenerator('Ann', 10));
