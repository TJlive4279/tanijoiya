document.addEventListener("DOMContentLoaded", function() { const ctx = document.getElementById('liveChart').getContext('2d'); const liveChart = new Chart(ctx, { type: 'line', data: { labels: ['1m', '3m', '5m', '30m'], datasets: [{ label: 'Market Trends', data: [10, 15, 7, 12], borderColor: 'blue', fill: false }] } });

const signals = [
    { time: '1m', signal: 'BUY' },
    { time: '3m', signal: 'SELL' },
    { time: '5m', signal: 'BUY' },
    { time: '30m', signal: 'SELL' }
];

const signalList = document.getElementById('signal-list');
signals.forEach(sig => {
    let li = document.createElement('li');
    li.textContent = ${sig.time} - Signal: ${sig.signal};
    signalList.appendChild(li);
});

});
