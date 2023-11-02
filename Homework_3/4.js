"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение        addition 
2. Разность        difference| subtraction 
3. Умножение       multiplication
4. Деление         division
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

//
function additionNumbers(num1, num2) {
    return num1 + num2;
}

function differenceNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1 - num2;
    }
    return num2 - num1;    
}

function multiplicationNumbers(num1, num2) {
    return num1 * num2;
}

function divisionNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1 / num2;
    }
    return num2 / num1;
    
}

const num1 = Math.trunc(Math.random() * 10);    //рандомное значение от 0 до 10 (10 не вкл)
const num2 = Math.trunc(Math.random() * 10);

console.log(num1);
console.log(num2);
console.log(additionNumbers(num1, num2));
console.log(differenceNumbers(num1, num2));
console.log(multiplicationNumbers(num1, num2));
console.log(divisionNumbers(num1, num2));