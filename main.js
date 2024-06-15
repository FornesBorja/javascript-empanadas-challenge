export const fn = (a, b, c) => {
  if (a < 0 || b < 0 || c < 0) {
    throw new Error("The inputs can't be negative");
  }
  if ((a + b + c) % 3 !== 0) {
    throw new Error("The sum of the inputs must be a multiple of 3");
  }
  if (a + b + c >= 40) {
    throw new Error("The sum of the inputs must be less than 40");
  }

  let price = [];
  let money = 0;

  const addEmp = (price_emp, quantity) => {
    for (let i = 0; i < quantity; i++) {
      price.push(price_emp);
    }
  };

  while (a > 0 && c > 0) {
    addEmp(14,1);
    a -= 0.5;
    c -= 0.5;
  }
  while (a > 0 && b > 0) {
    addEmp(13,1);
    a -= 0.5;
    b -= 0.5;
  }

  while (b > 0 && c > 0) {
    addEmp(15,1);
    b -= 0.5;
    c -= 0.5;
  }
  //Add the remaining empanadas
  addEmp(12, a);
  addEmp(14, b);
  addEmp(16, c);

  //Sort the array from highest to lowest.
  price.sort((a, b) => b - a);
  //Calculate the total cost, skipping every 3, since we only pay for 1 out of every 3 empanadas.
  for (let i = 0; i < price.length; i += 3) {
    money += price[i];
  }

  return money;
};
