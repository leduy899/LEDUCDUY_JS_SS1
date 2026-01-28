let book = prompt("Tên sách");
let author = prompt("Tên tác giả");
let year = prompt("Năm xuất bản");
let money = prompt("Giá tiền một cuốn");
let quantity = prompt("Số lượng nhập kho");

let yearOne = Number(year);
let moneyOne = Number(money);
let quantityOne = Number(quantity);

const currentYearDay = new Date().getFullYear();
let effect = currentYearDay - yearOne;

let result = author.trim().slice(0, 3).toUpperCase();
let randomNumber = Math.floor(Math.random() * 1000) + 1;
let bookCode = `${result}${yearOne}_${randomNumber}`;

let sum = moneyOne * quantityOne;
let randomOne = Math.floor(Math.random() * 10) + 1;

document.write(`--- PHIẾU NHẬP KHO --- <br>`);
document.write(`Mã sách: ${bookCode.trim()} <br>`);
document.write(`Tên sách: ${book.toUpperCase()} <br>`);
document.write(`Tên tác giả: ${author.toUpperCase()} <br>`);
document.write(`Năm xuất bản: ${yearOne} <br>`);
document.write(`Tuổi của sách: ${effect} năm <br>`);
document.write(`Tổng giá trị: ${sum.toLocaleString()} VNĐ <br>`);
document.write(`Ngăn kệ gợi ý: Kệ số ${randomOne}`);

console.log("Mã sách: - sp.js:30", bookCode);
console.log("Tổng tiền: - sp.js:31", sum);
