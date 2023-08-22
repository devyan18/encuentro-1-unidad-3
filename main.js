let miVariable = 5;

if (miVariable == 3) {
  console.log("Entre en el if");
} else if (miVariable == 4) {
  console.log("Entre en el else if");
} else {
  console.log("Salida por defecto");
}

switch (miVariable) {
  case 3: {
    console.log("mi variable es igual a 3");
    break;
  }
  case 4: {
    console.log("mi variable es igual a 4");
    break;
  }
  case 5: {
    console.log("mi variable es igual a 5");
    break;
  }
  case 6: {
    console.log("mi variable es igual a 6");
    break;
  }
  case 7: {
    console.log("mi variable es igual a 7");
    break;
  }
  default: {
    console.log("valor por defecto");
    break;
  }
}
