"use strict";
function processCall(recipient, onAvailable, onNotAvailable) {
    // Імітуємо доступність абонента випадковим числом
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient);
      return;
    }
  
    onAvailable(recipient);
  }
  
  function takeCall(name) {
    console.log(`З'єднуємо з ${name}, очікуйте...`);
    // Логіка прийняття дзвінка
  }
  
  function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
  }
  
  function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступний, записуємо голограму.`);
    // Логіка запису голограми
  }
  
  processCall("Манго", takeCall, activateAnsweringMachine);
  processCall("Полі", takeCall, leaveHoloMessage);

// 2 task

  function repeatLog(n) {
    for (let i = 1; i <= n; i += 1) {
      console.log(i);
    }
  }
  
  repeatLog(5);


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
 
  const petya = {
  username: "Petya",
  showName() {
    console.log(petya.username);
  },
};

petya.showName();


const bookShelf = {
  authors: ["Бернард Корнуелл", "Роберт Шеклі"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor("Лі Таніт");
console.log(bookShelf.getAuthors());




  