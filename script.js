// script.js

let balance = 0;

function updateBalanceDisplay() {
    document.getElementById('balance').innerText = `$${balance.toLocaleString()}`;
}

function addFunds() {
    const randomAmount = Math.floor(Math.random() * 10000) + 1000; // $1000 - $11000
    balance += randomAmount;
    updateBalanceDisplay();
}

function sendMoney() {
    if (balance <= 0) {
        alert("Not enough funds!");
        return;
    }
    const sendAmount = Math.floor(Math.random() * (balance / 2)) + 1;
    balance -= sendAmount;
    updateBalanceDisplay();
    alert(`Sent $${sendAmount.toLocaleString()} successfully!`);
}

// On page load
window.onload = function() {
    let fakeStart = 1000;
    let fakeEnd = 98234;
    let duration = 3000; // 3 seconds
    let startTime = null;

    function animateBalance(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        balance = Math.floor(fakeStart + (fakeEnd - fakeStart) * percent);
        updateBalanceDisplay();

        if (percent < 1) {
            requestAnimationFrame(animateBalance);
        }
    }

    requestAnimationFrame(animateBalance);
}
