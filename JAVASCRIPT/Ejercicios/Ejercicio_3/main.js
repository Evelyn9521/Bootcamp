//APARTADO 1
let = employees = []
for (let i = 1; i <= 100; i++){
    const newEmployee = {
        cargo:`Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)), //Number puede sustituirse por parsefloat
        salario:parseInt(Math.random()* (4000 - 1250) + 1250)
    };
    employees.push(newEmployee);
}
console.log(employees);

//APARTADO 1 CON CONSTRUCTOR
// function Employee(cargo, rendimiento, salario){
//     this.cargo = cargo;
//     this.rendimiento = rendimiento;
//     this.salario = salario;
// }
// for (let i = 1; i <= 100; i++){
//     employees.push(new Employee(
//         `Empleado${i}`, 
//         Number(Math.random().toFixed(2)), 
//         parseInt(Math.random()* (4000 - 1250) + 1250)));
// };


//APARTADO 2, Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.
const ordenarRendimiento = employees.sort((empleado1, empleado2) => empleado1.rendimiento - empleado2.rendimiento);
console.log(ordenarRendimiento);

//Otra manera de hacerlo con funcion anónima
// employees.sort(function(empleado1, empleado2){
//     return empleado1.rendimiento - empleado2.rendimiento
// });
//console.log(employees);


//APARTADO 3, Ordenar el array por salario e imprimirlo.  Usar una función de flecha.
const ordenarSalario = employees.sort((empleado1, empleado2) =>empleado1.salario-empleado2.salario);
console.log(ordenarSalario);


//APARTADO 4, Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará dentrodel stringCargo. Usar una función nombrada como callback
function decreciente(empleado1, empleado2){
return empleado2.cargo.split(" ")[1] - empleado1.cargo.split(" ")[1]; //el corchete con el 1 se pone para que te ordene el numero
}
employees.sort(decreciente);
console.log(employees);


//APARTADO 5, Usando filter: imprimir el cargo y salario de los que cobren más de 2500€
employees
.filter(employee => employee.salario >2500)
.forEach(employee => console.log(employee.cargo, employee.salario));


//APARTADO 6, Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5.
employees = employees.map(employee => {
    if (employee.salario < 1500) {
        // Modificar el salario
        employee.salario = employee.salario * 1.25;
    }
    return employee;
});
console.log(employees);


//APARTADO 7, Usando reduce: Obtener el coste total de todos los sueldos
// para la empresa teniendo en cuenta que a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos

const totalCost = employees.reduce((salarySum, employee) =>salarySum + employee.salario *1,15, 0); 
console.log(totalCost);


//APARTADO 8, 
//Despedir a los que tengan un rendimiento menor a 0.3.
employees = employees.filter(employee => employee.rendimiento >= 0.3);
console.log("despedir a los que tengan ",employees);



//Calcular el sueldo medio de la empresa.
const averagesSalary = employees.reduce((salarySum, employee) => salarySum + employee.salario, 0) / employees.length;
console.log("Sueldo medio de la empresa", averagesSalary);

//Subir el sueldo de los que tengan un rendimiento superior a 0.7.
// employees = employees.map(employee => {
//     if (employee.rendimiento < 0.7) {
//         // Modificar el salario
//         employee.salario = employee.salario * 1.25;
//     }
//     return employee;
// });

employees.forEach(employee =>{
    if(employee.rendimiento > 0.7){
        employee.salario = employee.salario *1.25
    }
})
console.log("subir sueldo a los que tengan un rendimiento mayor a 0.7", employees);
