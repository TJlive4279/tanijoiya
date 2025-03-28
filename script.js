document.addEventListener("DOMContentLoaded", function() {
    const signalList = document.getElementById("signal-list");
    const timeFrames = ["1m", "2m", "5m", "30m"];

    function generateSignal() {
        const signals = ["BUY", "SELL", "HOLD"];
        let signalData = [];

        timeFrames.forEach(timeFrame => {
            const randomSignal = signals[Math.floor(Math.random() * signals.length)];
            signalData.push(${timeFrame}: ${randomSignal});
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

    setInterval(generateSignal, 5000); // ہر 5 سیکنڈ میں نئے سگنل
    generateSignal(); // پیج لوڈ ہوتے ہی پہلا سگنل دکھائے
});
console.log("Script.js Loaded Successfully!")
