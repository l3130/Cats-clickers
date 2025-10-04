// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // For each cat, set up its own counter and click handler
    const cats = [
        {
            img: document.querySelector('#cat1 img'),
            clicksDisplay: document.querySelector('#cat1 p'),
            count: 0
        },
        {
            img: document.querySelector('#cat2 img'),
            clicksDisplay: document.querySelector('#cat2 p'),
            count: 0
        }
    ];

    cats.forEach(cat => {
        cat.img.addEventListener('click', function() {
            cat.count++;
            cat.clicksDisplay.textContent = `Clicks: ${cat.count}`;
        });
    });
});