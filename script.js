function calculate() {
    //定義
    const AVERAGE_BULLET = 1100;
    const ADD_TIME = 15;

    // 入力された数量を取得
    let peopleCount = parseInt(document.getElementById('peopleCount').value, 10);
    let haveBullet = parseFloat(document.getElementById('haveBullet').value);
    let clearTime = parseFloat(document.getElementById('clearTime').value);
    let difficulty = parseFloat(document.getElementById('difficulty').value);

    // 合計獲得弾数を計算
    let totalGetBullet = Math.round(AVERAGE_BULLET * peopleCount) + haveBullet;

    // 合計消費弾数を計算
    let realTime = clearTime + ADD_TIME;
    let totalUseBullet = Math.round(difficulty * (7200 / realTime));

      //不足弾数
    let lackOfBullet = totalUseBullet - totalGetBullet;
    
    //不足弾数が0以下なら0を設定
    if (lackOfBullet <= 0) {
        lackOfBullet = 0;
    }

    //必要サブ数
    let needSub = 0;
    if (lackOfBullet > 0) {
        needSub = Math.ceil(lackOfBullet / AVERAGE_BULLET);
    }

    // 結果を出力
    document.getElementById('totalGetBullet').innerText = totalGetBullet;
    document.getElementById('totalUseBullet').innerText = totalUseBullet;
    document.getElementById('lackOfBullet').innerText = lackOfBullet > 0 ? lackOfBullet : "不足無し";
    document.getElementById('needSub').innerText = needSub;
}

function checkHankakuInput(e) {
    // 全角文字を含むかどうかをチェック
    if (/[^\x01-\x7E]+/.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^\x01-\x7E]/g, "");
    }
}
