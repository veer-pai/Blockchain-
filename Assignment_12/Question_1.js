let Employee =
{
    "id": [67, 48, 29],
    "name": ["Hitanshu", "Ninad", "Amandeep"],
    "salary": [75000, 82000, 98000]
}

// a
console.log(Employee.id);

// b
console.log(Employee.id.length);

// c
for (let j = 0; j < Employee.id.length; j++) {
    console.log(Employee.id[j] + " : " + Employee.name[j]);
}

// d
console.log(Employee.salary);

// e
let totalSalary = Employee.salary.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
let avg = totalSalary / Employee.id.length
console.log(avg);