"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

// Вариант 1: Используя цикл for
// const daysOfWeek = {};
// 
// for (let i = 0; i < en.length; i++) {
//   daysOfWeek[en[i]] = ru[i];
// }
// 
// console.log(daysOfWeek);

// Вариант 2: Используя метод reduce
const daysOfWeek2 = en.reduce((result, key, index) => {
  result[key] = ru[index];
  return result;
}, {});

console.log(daysOfWeek2);