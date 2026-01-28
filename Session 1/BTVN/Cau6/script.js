let book = prompt("Tên sách");
console.log(`Tên sách gốc: ${book} - BTVN6.js:2`);
document.write(`Tên sách gốc: ${book} <br>`);
let capitalLetters = book.toUpperCase().trim();

let numericalOrder = prompt("Số thứ tự của sách trong thư viện");

console.log(
  `Mã sách sau chuẩn hóa: LIB - ${capitalLetters} - ${numericalOrder}`,
);
document.write(
  `Mã sách sau chuẩn hóa: LIB - ${capitalLetters} - ${numericalOrder}`,
);
