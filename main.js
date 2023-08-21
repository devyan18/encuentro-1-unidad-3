// arrays

const alumnosDeLaComision = [
  "Lucas Arenas",
  "Pablo Mariasch",
  "Federico Tortolero",
  "Matias Ortiz",
  "Alfredo Oscar",
  "Hugo Giovanetti",
  12,
  53,
  32,
  21,
  23,
  true,
  false,
  Symbol(),
  undefined,
  null,
];

console.log(alumnosDeLaComision[16]);

alumnosDeLaComision.push("Alfredo Oscar");

console.log(alumnosDeLaComision[16]);

alumnosDeLaComision.pop();

console.log(alumnosDeLaComision[16]);

// objects

let alumno = {
  nombre: "Dario",
  apellido: "Legue",
  edad: 25,
  casado: true,
  "fecha-de-nacimiento": "17/09/1990",
};

function restarIVA(salario) {
  salario = salario * 0.79;
  return salario;
}

let miSueldo = restarIVA(100);
let miSueldo2 = restarIVA(1000);

console.log(miSueldo);
console.log(miSueldo2);

var miVariable = "chau";

function miFuncion() {
  var miVariable = "hola";
}

console.log(miVariable);

miFuncion();

console.log(miVariable);

function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // ¡misma variable!
    console.log(x); // 71
  }
  console.log(x); // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71; // variable diferente
    console.log(x); // 71
  }
  console.log(x); // 31
}
// llamamos a las funciones
varTest();
letTest();
