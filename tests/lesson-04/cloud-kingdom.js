/*Bài 2: Tạo nhánh feat/cloud-kingdom-2 (đứng từ nhánh main) và thực hiện yêu
cầu sau:
● Tạo file tests/lesson-04/cloud-kingdom.js
● Khai báo:
○ Biến powerUp có giá trị là “mushroom”.
○ Sử dụng câu điều kiện if...else để xác định tên hiệu ứng tương ứng với
các powerUp:
■ mushroom: "Mario becomes Super!"
■ flower: "Mario can shoot fireballs!"
■ star: "Mario is invincible!"
none: "Mario is normal"
■ Khác: "Unknown power-up"*/
let powerUp = 'mushroom';
let effect = '';
// cach 1:
if (powerUp === 'mushroom') {
    effect = "Mario becomes Super!";
} else if (powerUp === 'flower') {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === 'star') {
    effect = "Mario is invincible!";
} else if (powerUp === 'none') {
    effect = "Mario is normal";
} else {
    effect = "Unknown power-up";
}
console.log(powerUp);
console.log(effect);

// Cach 2:
switch (powerUp){
    case "mushroom":
        effect = "Mario becomes Super!";
        break;
    case "flower":
        effect = "Mario can shoot fireballs!";
        break;
    case "star":
        effect = "Mario is invincible!";
        break;
    case "none": 
        effect = "Mario is normal";
        break;
    default: 
        effect = "Unknown power-up";  
        break; 
}
console.log(effect);

// cach 3:
effect = powerUp === 'mushroom' ? "Mario becomes Super!":
         powerUp === 'flower' ? "Mario can shoot fireballs!":
         powerUp === 'star' ? "Mario is invincible!":
         powerUp === 'none' ? "Mario is normal" : "Unknown power-up";
console.log(effect);