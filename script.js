document.addEventListener("DOMContentLoaded", function () {
    const signalList = document.getElementById("signal-list");
    const timeframes = ["1m", "2m", "5m", "30m"];

    function generateSignal() {
        const signals = ["BUY", "SELL", "HOLD"];
        let signalData = [];

        timeframes.forEach(timeframe => {
            const randomSignal = signals[Math.floor(Math.random() * signals.length)];
            signalData.push(${timeframe}: ${randomSignal});
        });

        displaySignals(signalData);
    }

    function displaySignals(signals) {
        signalList.innerHTML = "";
        signals.forEach(signal => {
            let li = document.createElement("li");
            li.textContent = signal;
            signalList.appendChild(li);
        });
    }

    generateSignal();
});
