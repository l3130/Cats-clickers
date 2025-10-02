// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const catImg = document.querySelector('img');
    const clicksDisplay = document.querySelector('p');
    let count = 0;

    catImg.addEventListener('click', function() {
        count++;
        clicksDisplay.textContent = `Clicks: ${count}`;
    });
});