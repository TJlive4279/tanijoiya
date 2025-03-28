function generateSignal() {
    const signals = ["BUY", "SELL", "HOLD"];
    let signalData = [];

    timeFrames.forEach(timeFrame => {
        const randomSignal = signals[Math.floor(Math.random() * signals.length)];
        signalData.push(${timeFrame}: ${randomSignal});
    });

    console.log(signalData); // یہ ڈیٹا کنسول میں دکھانے کے لیے ہے
    return signalData;
}
