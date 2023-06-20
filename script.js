"use strict";
// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//     // Логіка запису голограми
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Полі", takeCall, leaveHoloMessage);

// // 2 task

//   function repeatLog(n) {
//     for (let i = 1; i <= n; i += 1) {
//       console.log(i);
//     }
//   }
  
//   repeatLog(5);


//   3 

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// 

// // Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]



// function makeUser() {
//   return {
//     name: "Іван",
//     ref: this, // undefined
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // Яким буде результат?

// function makeUser() {
//   return {
//     name: "Іван",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// alert(user.ref().name); // Яким буде результат? Іван


// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     showOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     },
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']


  // function calculateTotalPrice(orderedItems) {
  //   let totalPrice = 0;
  //   // Change code below this line
  // orderedItems.forEach(function (orderedItem) {
  //     totalPrice += orderedItem;
  //   });
  
  //   // Change code above this line
  //   return totalPrice;
  // }
  // calculateTotalPrice([12, 85, 37, 4])
  // calculateTotalPrice([164, 48, 291])
  // calculateTotalPrice([412, 371, 94, 63, 176])

  // function filterArray(numbers, value) {
  //   const filteredNumbers = [];
  //   // Change code below this line
  // numbers.forEach(function filterArray(number, value) {
  //   if (numbers > value.length) {
  //       filteredNumbers.push(numbers);
  //     }
  // })
  //   // for (let i = 0; i < numbers.length; i += 1) {
  //   //   if (numbers[i] > value) {
  //   //     filteredNumbers.push(numbers[i]);
  //   //   }
  //   // }
  
  //   // Change code above this line
  //   return filteredNumbers;
  // }

  // filterArray([1, 2, 3, 4, 5], 4)


  // const books = [
  //   {
  //     title: "The Last Kingdom",
  //     author: "Bernard Cornwell",
  //     genres: ["adventure", "history"],
  //   },
  //   {
  //     title: "Beside Still Waters",
  //     author: "Robert Sheckley",
  //     genres: ["fiction", "mysticism"],
  //   },
  //   {
  //     title: "Redder Than Blood",
  //     author: "Tanith Lee",
  //     genres: ["horror", "mysticism", "adventure"],
  //   },
  // ];
  // // Change code below this line
  // const allGenres = books.map(book => book.genres);
  // const uniqueGenres = allGenres.filter((genres, index, array) => {array.indexOf(genres) === index;}) 
 
//   const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();


// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Лі Таніт");
// console.log(bookShelf.getAuthors());

// console.log("JavaScript is awesome".length);
// console.log("JavaScript is awesome".toUpperCase());

// const yearOfBirth = 2008;
// let age;
// console.log(age);
// age = 15;
// console.log(age);
  
// // Константа, що зберігає значення кольору
// const COLOR_TEAL = "#009688";
// console.log(typeof COLOR_TEAL);
// // Константа, що зберігає повідомлення про результат логіну
// const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";
// const username = "Mango";
// console.log("Username is ", username);
// const message = "JavaScript is awesome!";
// alert(message);
// const isComing = confirm("Please confirm hotel reservation.");
// console.log(isComing);
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// Важлива особливість prompt полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок. Тобто, якщо користувач ввів 5, то повернеться не число 5, а рядок "5".

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"
let val = 3;
val += 49;
console.log(val);

// Метод Number.parseInt() парсить з рядка ціле число.
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

// Метод Number.parseFloat() парсить з рядка дробове число.
console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(4)); // 0.41

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (100 - 1) + 1); // псевдовипадкове число від 1 до 10

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true


// Метод indexOf()

// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.
// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `"You picked ${productName}, price per item is ${pricePerItem} credits";`
// console.log(message);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// let totalPrice;
//   if (pricePerDroid * orderedQuantity > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//   message = `You ordered ${orderedQuantity} droids, you have ${pricePerDroid * orderedQuantity - customerCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(500, 10, 5000));

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange != isInRange; // Change this line

  return isNotInRange;
}