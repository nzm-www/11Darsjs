// 10
// let masv = [];
// for (let i = 0; i < 50; i++) {
//   let elementQiymat = "";
//   for (let j = 0; j <= i; j++) {
//     elementQiymat += i + 1;
//   }
//   masv.push(elementQiymat);
// }

// console.log(masv);
// ================================
// 9
// var masv = [];
// for (var i = 1; i <= 75; i++) {
//   var elementQiymat = "";
//   for (var j = 1; j <= i; j++) {
//     elementQiymat += "x";
//   }
//   masv.push(elementQiymat);
// }
// console.log(masv);
// ================================
// 7
// function ikktabrxilraqam(massiv) {
//   let raqamlar = {};
//   for (let i = 0; i < massiv.length; i++) {
//     let raqam = massiv[i];
//     if (raqamlar[raqam] === undefined) {
//       raqamlar[raqam] = 1;
//     } else {
//       return "ha";
//     }
//   }
//   return "yo'q";
// }
// let testMassiv = [1, 2, 3, 4, 5, 6, 10, 10];
// console.log(ikktabrxilraqam(testMassiv));
// ===============================================
// 6
// function ketmaketsonla(massiv) {
//   for (let i = 0; i < massiv.length - 1; i++) {
//     if (massiv[i] === massiv[i + 1]) {
//       return "ha";
//     }
//   }
//   return "yo'q";
// }

// let testMassiv = [1, 2, 3, 4];

// console.log(ketmaketsonla(testMassiv));
// ==================================================
// 5
// let massiv = [4, 1, 5, 0, 8, 2, 2];
// let toplam = massiv.reduce(function (acc, current, index, arr) {
//   if (index < arr.length - 1) {
//     acc += current;
//   }
//   return acc;
// }, 0);
// console.log("yigindi", toplam);
// ======================================================================
//3
// let massiv = [1, 2, [3, 4], 5, [6, 7]];

// let icMassivlar = massiv.filter(function (element) {
//   return Array.isArray(element);
// });

// console.log("Ichki massivlar:", icMassivlar);
// =========================================================
