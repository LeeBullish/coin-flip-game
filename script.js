document.addEventListener('DOMContentLoaded', () => {
    const flipButton = document.getElementById('flipButton');
    const result = document.getElementById('result');
    const headsCount = document.getElementById('headsCount');
    const tailsCount = document.getElementById('tailsCount');

    let heads = 0;
    let tails = 0;

    flipButton.addEventListener('click', () => {
        const coinFlip = Math.random() >= 0.5;
        result.textContent = coinFlip ? 'Heads' : 'Tails';

        if (coinFlip) {
            heads++;
            headsCount.textContent = heads;
        } else {
            tails++;
            tailsCount.textContent = tails;
        }
    });
});