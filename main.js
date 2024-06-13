export const fn = (a, b, c) => {
  if (a < 0 || b < 0 || c < 0) {
    throw new Error("Los inputs no tienen que ser negativos");
  }
  if ((a + b + c) % 3 !== 0) {
    throw new Error("La suma de los inputs debe ser multiplo de 3");
  }
  if (a + b + c >= 40) {
    throw new Error("La suma de los inputs debe ser menor de 40");
  }

  let precio_emp = [];
  let dinero = 0;

  while (a > 0 && c > 0) {
    precio_emp.push(14);
    a -= 0.5;
    c -= 0.5;
  }
  while (a > 0 && b > 0) {
    precio_emp.push(13);
    a -= 0.5;
    b -= 0.5;
  }

  while (b > 0 && c > 0) {
    precio_emp.push(15);
    b -= 0.5;
    c -= 0.5;
  }
  while (a > 0) {
    precio_emp.push(12);
    a--;
  }
  while (b > 0) {
    precio_emp.push(14);
    b--;
  }
  while (c > 0) {
    precio_emp.push(16);
    c--;
  }

  precio_emp.sort().reverse();
  console.log(precio_emp);
  let comprar = Math.floor(precio_emp.length / 3);
  let a_pagar = precio_emp.slice(0, comprar);
  console.log(a_pagar);
  for (let i = 0; i < a_pagar.length; i++) {
    dinero += a_pagar[i];
  }

  return dinero;
};
