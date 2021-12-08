var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
function messageUser() {
    console.log("This is a message to the user");
}
var person = { name: "Ana", age: 45 };
console.log(person);
// Desestructuración
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c);
var array = [1, 2, 3];
console.log(array[1]);
var array = [1, 2, 3, 5];
var x = array[0], y = array[1], rest = array.slice(2);
console.log(rest);
// Function example
/*/
function calculateIva (products: Product[]) : [number, number] {
    let total = 0;
    products.forEach (({price}) => {
        total += price;
    });

    return[total, total*0.15];
}

// Product class
class Product {
    Product.price: number;
}
*/
