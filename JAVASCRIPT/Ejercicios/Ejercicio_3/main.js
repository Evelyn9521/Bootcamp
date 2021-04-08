const array = [];
for(let i = 0; i <= 100; i++){
    array.push(i);
}

function Empleado(nºEmpleado){
    this.Cargo = `Empleado ${nºEmpleado}`
    this.Rendimiento = Math.floor(100 * Math.random())/100;
    this.salario =Math.floor(2750*Math.random())+ 1250;
}
const empleados =array.map((nºEmpleado) => new Empleado(nºEmpleado));
console.log(empleados);

//APARTADO 2

const ordenarRendimiento = empleados.sort((empleado1, empleado2) => empleado1.Rendimiento - empleado2.Rendimiento);

console.log(ordenarRendimiento);

//APARTADO 3
const ordenarSalario = empleados.sort((empleado1, empleado2) =>empleado1.salario-empleado2.salario);
console.log(ordenarSalario);

//APARTADO 4
const ordenarCargo = empleados.sort((empleado1, empleado2) => empleado1.Cargo.in - empleado2.Cargo.nºEmpleado);
console.log(ordenarCargo);