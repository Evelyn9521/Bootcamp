//1...GENERAR UN ARRAY DE 100 OBJETOS CON LAS SIGUIENTES PROPIEDADES:
let employees = [];
for (let i = 0; i <= 100; i++){
    const newEmployee = {
        position: `Employee ${i}`,
        performance: Number(Math.floor(Math.random()*100)),
        salary:parseInt(Math.random() * (4000 - 1250) + 1250)
    }
    employees.push(newEmployee); //Relleno el array vacio, con el newEmployee y sus propiedades.
}

//2...ORDENAR EL ARRAY POR RENDIMIENTO (PERFORMANCE) E IMPRIMIRLO.
const orderPerformance = employees.sort((employee1, employee2)=> employee1.performance - employee2.performance);
console.log(orderPerformance); 


//3...ORDENAR EL ARRAY POR SALARIO (SALARY) E IMPRIMIRLO.
const orderSalary = employees.sort((employee1, employee2) =>employee1.salary - employee2.salary);
console.log(orderSalary);


//4...ORDENAR EL ARRAY POR EL Nº DE EMPLEADO DE FORMA DECRECIENTE. EL Nº DE EMPLEADO
//SOLO ESTARÁ DENTRO DEL STRING CARGO (POSITION).
 const orderNumEmployee = employees.sort((employee1, employee2) =>employee2.position.split(" ")[1] - employee1.position.split(" ")[1]);
 console.log(orderNumEmployee);//el [1] se añade para que te ordene desde el primero al ultimo
                                //el split serapa la palabra empleado del nº con el que vamos a necesitar


 //5...USANDO FILTER IMPRIMIR EL CARGO Y SALARIO DE LOS QUE COBREN MÁS DE 2500€
 employees
 .filter(employee => employee.salary >2500)
 .forEach(employee => console.log(employee.position, employee.salary));


 //6...USANDO MAP, SUBIR EL SUELDO UN 25% A LOS QUE COBREN MENOS DE 1500€ Y VOLVER A HACER EL PUNTO 5
const incrementSalary = employees.map(employee =>{
    if(employee.salary < 1500){
    employee.salary = employee.salary * 1.25
    }
    return employee;//devuelve todos los empleados y los empleados con el sueldo subido al 25%
})
console.log(incrementSalary);


//7...USANDO REDUCE, OBTENER EL COSTE TOTAL DE TODOS LOS SUELDOS, TENIENDO EN CUENTA QUE A LA EMPRESA
//LE CUESTA TENER A UN EMPLEADO SU SUELDO MÁS UN 15% DE IMPUESTOS.

const totalCost = employees.reduce((sum, employee) =>sum + employee.salary *1,15, 0 ); 
console.log('La suma total de los sueldos es de ', totalCost);


//8...DESPEDIR A LOS QUE TENGAN UN RENDIMIENTO MENOS A 0.3
 const out = employees.filter(employee => employee.performance >= 0.3);
 console.log('despedir a os que tengan', out);

 //CALCULAR EL SUELDO MEDIO DE LA EMPRESA
 const averagesSalary = employees.reduce((salarySum, employee) => salarySum + employee.salary, 0) / employees.length;
 console.log("Sueldo medio de la empresa", averagesSalary);
 
 //SUBIR EL SUELDO DE LOS QUE TENGAN UN RENDIMIENTO SUPPERIOR A 0.7
 employees.forEach(employee =>{
    if(employee.rendimiento > 0.7){
        employee.salary = employee.salary *1.25
    }
})
console.log("subir sueldo a los que tengan un rendimiento mayor a 0.7", employees);