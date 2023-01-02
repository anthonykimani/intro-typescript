"use strict";
let employee = {
    id: 1,
    name: "Anthony",
    age: 22,
    employeeSalary: (salary, tax, allowances) => {
        console.log(salary + tax + allowances);
        return salary + tax + allowances;
    }
};
employee.employeeSalary(900000, 20000, 1000000);
//# sourceMappingURL=index.js.map