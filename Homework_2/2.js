"use strict";

/*
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.
*/

const test = confirm("У вас много денег?");
//  if (test === true) {
//    alert("Скоро будем у вас ;)");          // console.log - посетитель сайта не увидит ответ
//  } else {
//    alert("До свидания.");
//  }
alert((test) ? `Скоро будем у вас ;)` : `До свидания.`);