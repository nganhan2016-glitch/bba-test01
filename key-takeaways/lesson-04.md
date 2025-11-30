**1.Phạm vi của biến**
Phạm vi (scope) xác định nơi mà biến có thể truy cập JavaScript có ba loại phạm vi:
***Toàn cục (global)***
var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";
function testFunction() {
console.log(globalVar); // Truy cập được
console.log(globalLet); // Truy cập được
}
***Function scope (hàm)***
function myFunction() {
var functionScoped = "Chỉ có thể truy cập trong hàm này";
let alsoFunctionScoped = "Tương tự";
console.log(functionScoped); // OK
}
console.log(functionScoped); // Error: functionScoped is not defined
***Block scope (khối)***
if (true) {
var varVariable = "var không có block scope";
let letVariable = "let có block scope";
const constVariable = "const cũng có block scope";
}
console.log(varVariable); // OK - var không bị giới hạn bởi block
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined

***Break vs continue***
**break** dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.

//vd1: Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
if (i === 5) {
break; // Thoát vòng lặp khi i = 5
}
console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Vd2: Tìm phần tử đầu tiên
const numbers = [1, 3, 8, 7, 9, 11];
let firstEven = null;
for (let num of numbers) {
if (num % 2 === 0) {
firstEven = num;
break; // Dừng ngay khi tìm thấy
}
}
**continue** dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.
//vd1: Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
if (i % 2 === 0) {
continue; // Bỏ qua số chẵn
}
console.log(i);
}
// Output: 1, 3, 5, 7, 9

// Vd2: Lọc dữ liệu
const scores = [85, 92, 78, 95, 60, 88];
console.log("Điểm >= 80:");
for (let score of scores) {
if (score < 80) {
continue; // Bỏ qua điểm < 80
}
console.log(score);
}
// Output: 85, 92, 95, 88

**2.Advance condition: if...else, if...else if, switch...case**
**Câu điều kiện if...else:** Thực thi code khác nhau cho trường hợp true và false:
let score = 75;

if (score >= 60) {
console.log("Bạn đã qua môn");
} else {
console.log("Bạn cần học lại");
}

**Câu điều kiện if...else...if:** Kiểm tra nhiều điều kiện theo thứ tự:
let score = 85;

if (score >= 90) {
console.log("Xuất sắc");
} else if (score >= 80) {
console.log("Giỏi");
} else if (score >= 70) {
console.log("Khá");
} else if (score >= 60) {
console.log("Trung bình");
} else {
console.log("Yếu");
}

**Ternary operator (toán tử điều kiện):** Cách viết ngắn gọn cho if...else
đơn giản

let age = 20;
let status = (age >= 18) ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"
// Có thể lồng nhau (nên cẩn thận với độ phức tạp)
let score = 75;
let grade = score >= 90 ? "A" :
score >= 80 ? "B" :
score >= 70 ? "C" :
score >= 60 ? "D" : "F";

**3.Advance loops**
**for...in Loop**: Dùng để duyệt qua các thuộc tính (properties) có thể đếm được của
một object, bao gồm cả thuộc tính kế thừa.
// vd1: Với Object
const person = {
name: "John",
age: 30,
city: "Hanoi"
};
for (let key in person) {
console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: Hanoi

//vd2: Với Array (không khuyến khích)
const colors = ["red", "green", "blue"];
colors.customProperty = "rainbow";
for (let index in colors) {
console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
// customProperty: rainbow
**for...of Loop**: thuong dùng cho Array
const arr = ["A","B","C"];
for (let value of arr){
    console.log(value);
}
**for...each Loop**: Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue.
const arr = ["A","B","C"];
arr.forEach((value,index) => {
    console.log(value);
    console.log(index);
});
**4.Array helper functions**
Một số array utils thường dùng:
● map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử
của mảng gốc. Trả về mảng mới có cùng độ dài
● filter: Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện
trong hàm callback. Trả về mảng đã được lọc
● find: Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều
kiện. Trả về undefined nếu không tìm thấy
● reduce: Duyệt qua mảng và tích lũy các phần tử thành một giá trị
duy nhất (số, chuỗi, object...) dựa trên hàm callback
● some: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn
điều kiện hay không. Trả về true/false.
● every: Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều
kiện hay không. Trả về true/false.
● sort: Sắp xếp các phần tử trong mảng theo thứ tự (mặc định là
alphabet/tăng dần). Thay đổi mảng gốc.
● push: Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng
gốc và trả về độ dài mới.
● pop: Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc
và làm giảm độ dài.
● shift: Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc
và làm giảm độ dài.
● unshift: Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi
mảng gốc và trả về độ dài mới của mảng.

**5.String helper functions**
Một số string utils thường dùng:
● trim(): cắt khoảng trắng hai đầu
○ trimLeft(): cắt bên trái
○ trimRight(): cắt bên phải
● toLowerCase(): chuyển chuỗi thành chữ thường
● toUpperCase(): chuyển chuỗi thành chữ hoa
● includes(<substr>): kiểm tra chuỗi bao gồm chuỗi con <substr>
không
● replace(<chuỗi cần thay>, <chuỗi mới>)
● split(<tách_bởi_gì>)
● substring(<điểm_bắt_đầu>, <điểm_kết_thúc>): lấy 1 chuỗi con
từ điểm bắt đầu tới điểm kết thúc
● indexOf(<chuỗi kí tự>): tìm vị trí của chuỗi con