enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

console.log(ContractStatus[employeeStatus]);

function messageUser(): void {
    console.log("This is a message to the user");
}

let person:object= {name:"Ana", age: 45}
console.log(person);

// Desestructuración
var obj= {a:1, b:2, c:3}
console.log(obj.c);

var array= [1, 2, 3]
console.log(array[1]);

var array= [1, 2, 3, 5]
var [x, y,  ...rest] = array;
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
