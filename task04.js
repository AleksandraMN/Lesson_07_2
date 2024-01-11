'use strict';

const allCashbox = [
   [12, 4500], 
   [7, 3210], 
   [4, 650], 
   [3, 1250], 
   [9, 7830], 
   [1, 990], 
   [6, 13900], 
   [1, 370]
];

const getAveragePriceGoods = (arr) => {
   const newArr = arr;
   let count = 0;
   let sum = 0;
   for (const elem  of  newArr) {
      const [ x, y ] = elem;
      count += x;
      sum += y;
   }
   let result = Math.round(sum / count);
   return result;
}

console.log(`Средняя стоимость одного товара в магазине равна ${getAveragePriceGoods(allCashbox)}.`);
