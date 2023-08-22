// funciones

function nombreDeLaFuncion(num1, num2) {
  console.log("lorem 50 palabras");
  console.log(num1 + num2);
  console.log(true, false);
}

// nombreDeLaFuncion(12, 53);
// nombreDeLaFuncion(2, 3);
// nombreDeLaFuncion("12", "32");

function cuatroOperacionesBasicas(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
}

//cuatroOperacionesBasicas(4, 0);

const suma = (num1 = 0, num2 = 0) => {
  console.log(typeof num1);
  console.log(typeof num2);
  console.log(num1 + num2);
};

//suma();

// parametros nombrados
const division = ({ dividendo, divisor }) => {
  console.log(dividendo / divisor);
};

division({
  dividendo: 10,
  divisor: 2,
});

// function resta(num1, num2) {
//   return num1 - num2;
// }

// let valorDeLaResta = resta(1, 2);

// console.log(valorDeLaResta);

// desestructuracion

const objetoCualquiera = {
  nombre: "asdasd",
  apellido: "asdasd",
  edad: 23,
};

const { nombre, apellido, edad } = objetoCualquiera;

const arrayCualquiera = [1, 2, "hola", "chau", true];

const [primero, segundo, tercero, cuarto, quinto] = arrayCualquiera;
