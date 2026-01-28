let input = prompt("Nhâp vào số lượng sách trong thư viện:");
let number = Number(input);
if (isNaN(number) || number < 0) {
  alert("Vui lòng nhập vào một số hợp lệ!");
} else {
  console.log(`Số lượng sách trong thư viện là : ${number}`);
  document.write(`Số lượng sách trong thư viện là :${number}`);
}
