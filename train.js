// E-TASK:

function getReverse(a) {

  let first = a.split('').reverse().join('');

  return first;
}

console.log(getReverse("hello"))






////////////////////////////////////////////////////

// D-TASK:

// function checkContent(a, b) {

//     let first = a.split('').sort().join('');
//     let second = b.split('').sort().join('');

//     return first === second;
// }

// console.log(checkContent("mitgroup", "gmtiprou"))





////////////////////////////////////////////////////////////

// C-TASK:
// const time = require("moment");

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     time() {
//         return time().format('HH:mm');
//     }

//     qoldiq() {
//         return `hozir ${this.time()} da, qoldiq:  ${this.non} ta non,  ${this.lagmon} ta lagmon,  ${this.cola} ta cola`;
//     }

//     sotish(mahsulot, soni) {
//         this[mahsulot] -= soni;
//         return `hozir ${this.time()} da, ${soni} ta ${mahsulot} sotildi! `;
//     }

//     qabul(mahsulot, soni) {
//         this[mahsulot] += soni;
//         return `hozir ${this.time()} da, ${soni} ta ${mahsulot} qabul qilindi! `;
//     }
// }


// const shop = new Shop(10, 10, 10);

// console.log(shop.qoldiq());
// console.log(shop.sotish('non', 2));
// console.log(shop.qabul('cola', 2));
// console.log(shop.qoldiq());






/////////////////////////////////////////////////////////////////

// B-TASK:

// function countDigits(string) {
//     let count = 0;

//     for (let value of string) {
//         if (!isNaN(value)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countDigits("ad2a54yg79wet0sfgb9")); // 7












//////////////////////////////////////////////////

// A-TASK:
// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("g", "engineer"));









//////////////////////////////////////////////////////////////////////////

/*

  DEFINATION            CALL

  callback        >    callback
  async/await     >    then/catch || async/await
  promise         >    then/catch || async/await

*/




// console.log("Jack Ma maslahatlari");

// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ];




// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {

//         setInterval(function () {
//             callback(null, list[5]);
//         }, 5000);




// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(list[5]);
//     }, 5000);
// })


// return list[5];

// setTimeout(function () {
//     return list[5];
// }, 5000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// });
// console.log('passed here 1');



// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return list[5]
//     }
// }




// then/catch
// console.log("passed here 0");
// maslahatBering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");


// async/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }

// run();








// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000)

//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// });
// console.log('passed here 1');


