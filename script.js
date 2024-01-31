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
        // 2つ同じ数字の特殊条件をチェック
        let doubleNumber = rolls.find(roll => counts[roll] === 2);
        let otherNumber = rolls.find(roll => counts[roll] === 1);
        if ((otherNumber === 1 || otherNumber === 6) && (doubleNumber !== 1 && doubleNumber !== 6)) {
            return "yakuari" + otherNumber + ".png";
        } else {
            return "yakuari" + doubleNumber + ".png";
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
