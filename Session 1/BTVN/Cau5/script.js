let book = prompt("Tên sách");
console.log(`Sách: ${book} - BTVN5.js:2`);
document.write(`Sách: ${book} <br>`);

let year = prompt("Năm xuất bản của sách");
console.log(`Năm xuất bản: ${year} - BTVN5.js:6`);
document.write(`Năm xuất bản: ${year} <br>`);
let yearOne = Number(year);

const currentYearDay = new Date().getFullYear();
console.log(`năm hiện tại: ${currentYearDay} - BTVN5.js:11`);

let effect = currentYearDay - yearOne;
console.log(`Tuổi của sách: ${effect} năm - BTVN5.js:14`);
document.write(`Tuổi của sách: ${effect} năm`);
