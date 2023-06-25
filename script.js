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

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// function checkStorage(available, ordered) {
 
//   // Change code below this line

//   const message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  

//   // Change code above this line
//   return message;
// }
// checkStorage();

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
// switch (country) {
//   case "China": 
//     price = 100;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   case "Chile":
//     price = 250;
//      message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//     case "Australia":
//     price = 170;
//      message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//     case "Jamaica":
//     price = 120;
//      message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   default:
//     message = "Sorry, there is no delivery to your country";
// }
//   // Change code above this line
//   return message;
// }


// prompt(getShippingCost("Australia"));

// const minSalary = 500;
// const maxSalary = 5000;
// let employes = 5;
// let totalSalary = 0;
//  for (let i = 0; i < employes; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
//   console.log(`Salary of employes ${i} - ${salary}`);
//   totalSalary +=salary;
//  }
//  console.log(totalSalary);

// const min = 5;
// const max = 28;
// let total = 0;

// for (let i = min; i < max; i+=1) {
//   if (i % 2 !== 0) {
//     continue;
//   } 
//   console.log(i);
//   total += i;
// }
// console.log(total);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }
//   console.log(number);
// }
// or
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const nam = "Mango";
// console.log(nam.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []