//5. Verilmis ishciler siyahisinda (ischiler obyekt seklindedir 
//ve firstName,lastName,salary deyerleri var) 
//maashi 500-den yuxari olan ishcileri ekrana cap eden alqoritm

var employee1 = {
    firstName: "Tahir",
    lastName: "Hesenli",
    salary: 200
}
var employee2 = {
    firstName: "Aysel",
    lastName: "Memmedova",
    salary: 501
}
var employee3 = {
    firstName: "Ferid",
    lastName: "Khalilli",
    salary: 700
}
var employee4 = {
    firstName: "Elnur",
    lastName: "Khalilov",
    salary: 4000
};

var employees = [employee1,employee2,employee3,employee4];

for (let index = 0; index < employees.length; index++) {
    if (employees[index].salary>500) {
        console.log(employees[index].firstName+" "+employees[index].lastName)
    }
}

