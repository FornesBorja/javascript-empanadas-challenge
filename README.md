# Empanadas challenge🥟
Welcome to the Empanadas Challenge! This project aims to solve a fun and challenging problem involving the purchase of empanadas with a unique pricing strategy.

## Table of Contents
- [Problem](#problem)
- [Running Tests](#running-tests)
- [Explanation](#explanation)
- [Stack](#stack)
- [Authors](#authors)

## Problem

### Original Statement (Spanish)

El profesor Maple se embarca en la tarea de adquirir empanadas para todos los participantes del bootcamp de programación. Dado que hoy es el Día de las Empanadas,  hay una oferta especial en la que te llevas hasta tres empanadas y solo pagas la más cara. Con un presupuesto ajustado para el curso, los profesores debaten para intentar minimizar el gasto total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia: como la empanada más cara la tendrá que pagar de todas formas, la comprará junto a la segunda y tercera más caras, que ofrecen el mayor ahorro. Con las n-3 empanadas restantes, aplicará el mismo procedimiento hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la mejor estrategia. Pero cuando están a punto de pagar, escuchan la siguiente conversación de una familia de al lado:

"Queremos una empanada de pollo, de 12 euros, una de carne, de 14 euros, y una vegetariana, de 16 euros."

Los profesores piensan inmediatamente: "Cogerán la oferta 3x1, de forma que solo paguen los 16 euros de la empanada vegetariana y se lleven gratis la de carne y la de pollo". A lo cual, la familia continúa:

"Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y mitad vegetariana, y la de carne aparte. Como todas las empanadas valen 14 euros, cogeremos la oferta 3x1 y nos las llevaremos por 14 euros".

Cuando los profesores salen de su asombro, deciden que lo más sensato es utilizar el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro, pagando por ella la media del costo de las dos empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
## Explanation

First, I handled possible errors that may arise, such as having a negative number of empanadas, the sum not being a multiple of 3, or the sum of the empanadas being greater than 40. Then, I declared the necessary variables: in my case, "array_price," which will be an array with the price of the empanadas, and "price," which will later store the price of the empanadas.

To avoid multiple "while" loops, I created a function that adds the necessary number of empanadas to the array as needed. The next step was to group the empanadas by price using "while" loops and calling the previously created function, but with the second argument set to one, since the repetition will be handled by the "while" loop.

When there are no more empanadas to group, we call the function again, this time with arguments a, b, and c. Then, we sort the array from highest to lowest and iterate through it three by three, as we only pay for every three empanadas, adding the amount in that position of the array to "price." The total accumulated in "price" will be what we need to pay.

## Stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 


## Authors

- [@FornesBorja](https://github.com/FornesBorja)
- Original repository: [empanadas challenge](https://github.com/GeeksHubsAcademy/javascript-empanadas-challenge)
 

 
