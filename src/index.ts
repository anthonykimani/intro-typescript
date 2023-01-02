console.log("Hello Typescript");

let digit: number = 567;

let firstName: string = "Sam";

if(digit > 0){
    digit-=100;
}
console.log(digit);

let sales: number = 2234_342_232;
let course: string = "TypeScript";
let is_published: boolean = true;
let cost;

let prices: number[] = [22,1,425,2,56,90];

prices.forEach(element=>{
    console.log(element.toString());
})

for(let i:number = 0;i <prices.length;i++){
    console.log(prices[i].toString())
}

prices.map(element=>element.toString())

console.log(prices);

//using enums to represent a list of constants.
const enum Size { Small, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// const calculateSalary: number(salary: number, tax: number, allowances: number)=>{
//     let totalSalary = (salary + allowances) - tax;
//     return totalSalary;
// }

// working with functions
let totalSalary = 30000;

function calculateSalary(salary: number, tax: number, allowances: number): number{
    totalSalary = ( salary + allowances ) - tax;
    console.log(totalSalary);
    return totalSalary;
}

calculateSalary(40000, 500, 10000);

function declareSalary(employeeName: string, totalSalary: number): string{
    console.log(`${employeeName}, your salary is ${totalSalary}`);
    return `${employeeName}, your salary is ${totalSalary}`;
}

declareSalary("Sam", totalSalary);

// working with objects
let employee: {
    readonly id: number,
    name: string,
    age: number,
    employeeSalary: (salary: number, tax: number, allowances: number)=> number;
} = {
    id:1,
    name:"Sam",
    age:22,
    employeeSalary:(salary: number, tax: number, allowances: number)=>{
        console.log(salary + tax + allowances);
        return salary + tax + allowances;
    }
}

employee.employeeSalary(900_000, 20_000, 1_000_000)

type Employee = {
    readonly id: number,
    name: string,
    age: number,
    employeeSalary: (salary: number, tax: number, allowances: number)=> number;
}

let employeeOne: Employee = {
    id: 1,
    name: "steve",
    age: 32,
    employeeSalary:(salary: number, tax: number, allowances: number)=>{
        console.log(salary + tax + allowances);
        return salary + tax + allowances;
    }
}