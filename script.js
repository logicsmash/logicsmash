document.getElementById("rollButton").addEventListener("click", function() {
    let rolls = [];
    let intervalId = setInterval(function() {
        for (let i = 1; i <= 3; i++) {
            let roll = Math.floor(Math.random() * 6) + 1;
            document.getElementById("dice" + i).src = "dice" + roll + ".png";
        }
    }, 100);

    setTimeout(function() {
        clearInterval(intervalId);
        rolls = []; // ここでrollsを再初期化
        for (let i = 1; i <= 3; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
            document.getElementById("dice" + i).src = "dice" + rolls[i - 1] + ".png";
        }

        let resultImageSrc = getResultImage(rolls);
        document.getElementById("resultImage").src = resultImageSrc;
    }, 2000);
});

function getResultImage(rolls) {
    let counts = {};
    rolls.forEach(function(roll) {
        counts[roll] = (counts[roll] || 0) + 1;
    });

    if (Object.values(counts).includes(3)) {
        if (counts[1] === 3) {
            return "pinzoro.png";
        } else {
            return "zorome.png";
        }
    } else if (Object.values(counts).includes(2)) {
        // 2つ同じ目と1つ異なる目の処理を更新
        let doubleNumber = Object.keys(counts).find(key => counts[key] === 2);
        let otherNumber = Object.keys(counts).find(key => counts[key] === 1);
        if (otherNumber) { // 2つ同じと1つ異なる目がある場合
            return `yakuari${otherNumber}.png`;
        }
    } else if (new Set(rolls).size === 3) {
        if (rolls.includes(4) && rolls.includes(5) && rolls.includes(6)) {
            return "sigoro.png";
        } else if (rolls.includes(1) && rolls.includes(2) && rolls.includes(3)) {
            return "hihumi.png";
        }
    }
    return "yakunasi.png";
}
