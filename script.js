document.addEventListener('DOMContentLoaded', () => {
    const flipButton = document.getElementById('flipButton');
    const result = document.getElementById('result');
    const betAmountInput = document.getElementById('betAmount');
    const headsCount = document.getElementById('headsCount');
    const tailsCount = document.getElementById('tailsCount');

    let heads = 0;
    let tails = 0;

    flipButton.addEventListener('click', () => {
        const betAmount = parseInt(betAmountInput.value, 10);
        const coinFlip = Math.random() >= 0.5;
        result.textContent = coinFlip ? 'Heads' : 'Tails';

        if (coinFlip) {
            heads += betAmount;
            headsCount.textContent = heads;
        } else {
            tails += betAmount;
            tailsCount.textContent = tails;
        }
    });
});
