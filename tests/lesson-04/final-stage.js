/*
“Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 có tổng chia hết cho 17”
Ví dụ: (1, 16), (2, 15), (3, 14)... là cặp số hợp lệ vì có tổng chia hết cho 17
*/
function findPairsDivisionBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            let sum = i + j;
            if (sum % 17 === 0) {
                console.log("(" + i + " , " + j + ")");
                count++;
            }
        }
    }
    console.log(`Tổng cộng có: ${count} cặp`);
}
findPairsDivisionBy17();