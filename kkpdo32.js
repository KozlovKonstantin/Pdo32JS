// Выполнил студент Козлов Константин Группы Пдо-32
// Основы JS: Задание №1
// Задание: Нужно написать функцию, которая возвращает тип входного аргумента
// На входе: один аргумент, любого значения
// На выходе: строка, с типом входного аргумента
function getType(input) {
  return typeof input;
}

console.log(getType(670));

// Основы JS: Задание №2
// Задание: Что выведется в консоль и почему?
// const a = () => console.log("a");
// const b = () => console.log("b");
// const c = a || b ? a() : b();
// console.log(c);

//Вывод будет таким: "a" и "undefined". 
//Объяснение: При выполнении выражения "a||b" проверяется, является ли функция "a" истинным значением. В этом случае "a" является истинным значением, поэтому //выводится "a". После вызова a(), функция "a" не возвращает явное значение, поэтому "c" принимает значение "undefined".


// —--------------------------—
// Функции: Задание №1
// Задание: Нужно реализовать функцию, возвращающая сумму всех аргументов,
// если тип аргумента - число. Вызовов ВСЕГДА 5
function count(num) {
  if (typeof num !== 'number') {
    return count;
  }

  let sum = num;

  function nextCount(nextNum) {
    if (typeof nextNum === 'number') {
      sum += nextNum;
    }
    return nextCount;
  }

  nextCount.toString = function () {
    return sum;
  };

  return nextCount;
}

console.log(+count(3)(2)(1)(5)(7));
console.log(+count(3)(null)(1)('asad')());


// —--------------------------—
// Объекты и Массивы: Задание №1
// Задание: Реализовать функцию convertArrToObj, которая на вход принимает
// массив значений, а на выход отдает объект, где ключ - это индекс элемента в
// массиве, а значение - сам элемент
function convertArrToObj(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}

const arr = [1, null, 'test', undefined];
const obj = convertArrToObj(arr);
console.log(obj);

// Объекты и Массивы: Задание №2
// Задание: Требуется реализовать функцию countFromArr, которая позволяет
// подсчитать значения массива. На вход поступает массив, на выход получаем
// объект, где ключ - это элемент массива, а значение - его кол-во в массиве
function countFromArr(arr) {
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (countObj[element]) {
      countObj[element] += 1;
    } else {
      countObj[element] = 1;
    }
  }
  return countObj;
}

const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res);

// // Объекты и Массивы: Задание №3
// //Задание: Требуется реализовать функцию groupByField, которая позволяет
// //сгруппировать массив объектов по определенному полю этого объекта.
// //На вход поступает массив объектов и строка с названием нужного поля, на выход
// //объект - где ключом является значение поля объекта, а значением - массив
// //объектов где значение в поле равно этому ключу 🤪 (надеюсь в примере будет
// //понятней)
function groupByField(arr, field) {
  const groupedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const value = obj[field];
    if (groupedObj[value]) {
      groupedObj[value].push(obj);
    } else {
      groupedObj[value] = [obj];
    }
  }
  return groupedObj;
}

const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}];
const res = groupByField(arr, 'test');
console.log(res);


// —-------------------------------—
// Прототипы, наследование: Задание №1
//Задание: Реализовать функцию plus()
// (1).plus(2); // 3
function plus() {
  return this + arguments[0];
}

Number.prototype.plus = plus;

console.log((1).plus(2));
// —-------------------------------—
// Асинхронная работа в JS: Задание №1
//Задание: Что выведется в консоль?
//console.log("start");
//setTimeout(() => console.log("timeout"), 0);
//new Promise((resolve, reject) => {
//console.log("promise constructor");
//reject();
//})
//.then(() => console.log("p1"))
//.catch(() => console.log("p2"))
//.catch(() => console.log("p3"))
//.then(() => console.log("p4"))
//.then(() => console.log("p5"));
//console.log("final");

//В консоль будет выводиться разный результат в зависимости от IDE, в одних случая вывод будет таким:

//start
//promise constructor
//final
//p2
//p4
//p5

//В других случаях вывод может быть таким:

//start
//promise constructor
//final
//p2
//p4
//p5
//timeout

//"timeout" выводится после "p5", что означает, что setTimeout выполнился после всех then-обработчиков промиса.