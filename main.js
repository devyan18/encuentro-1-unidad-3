let iterador = 1;

while (iterador <= 10) {
  if (iterador != 5) {
    console.log("while ", iterador);
    iterador++;
  } else {
    iterador++;
    return;
  }
}

let i = 1;

do {
  console.log("do while", i);
  i++;
} while (false);

for (let iter = 0; iter < 10; iter++) {
  console.log("For ", iter);
}
