/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents

- pasar el precio por litro a centavos, 
- calcular el descuento, no puede ser mas e 25 centavos, y restarselo al precio por litro
-  multiplicar precio por litro en centavos por los litros, y dividir por 100

*/

const fuelPrices = (litres, pricePerLitre) => {
  let discount = null;
  let pricePerLitreCents = pricePerLitre * 100;
  let total = null;
  // switch (true) {
  //   case litres >= 2 <= 4:
  //     discount = 5;
  //     break;
  //   case litres >= 4 <= 6:
  //     discount = 1;
  //     break;
  //   case litres > 6 <= 8:
  //     discount = 15 * litres;
  //     break;
  //   case litres > 8 <= 10:
  //     discount = 2 * litres;
  //     break;
  //   case litres > 10 <= 12:
  //     discount = 25 * litres;
  //     break;
  //   case litres > 12:
  //     discount = 25;
  //     break;
  //   default:
  //     break;
  // }

  total = (pricePerLitreCents - discount) * litres;
  console.log(discount);
  return total;
};

console.log(fuelPrices(5, 1.23));
