function calculate() {
    //定義
    const AVERAGE_BULLET = 1100;
    const ADD_TIME = 15;

    // 入力された数量を取得
    let peopleCount = parseInt(document.getElementById('peopleCount').value, 10);
    let clearTime = parseFloat(document.getElementById('clearTime').value);
    let difficulty = parseFloat(document.getElementById('difficulty').value);

    // 合計獲得弾数を計算
    let totalGetBullet = Math.round(AVERAGE_BULLET * peopleCount);

    // 合計消費弾数を計算
    let realTime = clearTime + ADD_TIME;
    let totalUseBullet = Math.round(difficulty * (7200 / realTime));

    //必要サブ数
    let needSub = Math.ceil((totalUseBullet - totalGetBullet) / AVERAGE_BULLET);

    // 結果を出力
    document.getElementById('totalGetBullet').innerText = totalGetBullet;
    document.getElementById('totalUseBullet').innerText = totalUseBullet;
    document.getElementById('needSub').innerText = needSub;
}

function checkHankakuInput(e) {
    // 全角文字を含むかどうかをチェック
    if (/[^\x01-\x7E]+/.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^\x01-\x7E]/g, "");
    }
}
