/*Bài 1: Tạo nhánh feat/cloud-kingdom và thực hiện yêu cầu sau:
● Tạo file tests/lesson-04/cloud-kingdom.js
● Khai báo:
○ Biến playerName có giá trị là “Mario”.
○ Biến currentLives có giá trị là 3.
○ Các hằng số lưu coins theo level:
■ Level 1: 25;
■ Level 2: 30;
■ Level 3: 45;
○ Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
○ In ra số coin dư khi chia giá trị trung bình cho 3 (tức là phép chia lấy
dư)

● Commit kết quả với message: “feat: add solution for challenge 03”*/

let playerName = "Mario";
let currentLives = 3;
const level1 = 25;
const level2 = 30;
const level3 = 45;

let sum = level1 + level2 + level3;
let avg = sum / 3;
let soCoinDu = sum % 3;
console.log("Tổng coin của 3 level: "+ sum);
console.log("Gia tri trung binh: " + avg);
console.log("Số coin dư: "+ soCoinDu);
