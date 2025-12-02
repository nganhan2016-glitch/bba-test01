/*Bài 1: Tạo hàm createCharacters:
● Khai báo mảng các object: characters có các thuộc tính: name, level, health.
● Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
○ thuộc tính name: UPPERCASE của name gốc
○ level: x2 của level gốc
○ health: x3 của health gốc
● Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
mảng mới lọc được này là “possibleWinners” */
function createCharacters() {
    let characters = [
        { name: "Nga", level: 1, health: 500 },
        { name: "xyz", level: 2, health: 1200 },
        { name: "abc", level: 3, health: 1000 }
    ]
    let charactersPowerUp = characters.map(char =>
    ({
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3
    })
    );
    console.log(charactersPowerUp);
    let possibleWinners = characters.filter(winner =>
        winner.health > 1000
    );
    console.log(possibleWinners);
}
createCharacters();

/*
Bài 2: Tạo hàm printLeaderboard:
● Nhận vào tham số: players là mảng các object: [{name: "Mario", score:
1000}, ...]
● Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
● In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía
trước (🥇, 🥈, 🥉)
*/
let players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 500 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 1500 }
]
function printLeaderboard(players) {
    let result = players.sort((a, b) => b.score - a.score);
    console.log(result);
    let medal1 = ["🥇", "🥈", "🥉"];
    let medal = ["G", "S", "B"];
    for (let i = 0; i < result.length; i++) {
        if (i < 3)
            console.log(medal[i] + " " + (i + 1) + ". " + result[i].name + " - " + result[i].score + " pts");
        else
            console.log("  " + (i + 1) + ". " + result[i].name + " - " + result[i].score + " pts");
    }
}
printLeaderboard(players);
