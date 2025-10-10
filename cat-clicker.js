document.addEventListener('DOMContentLoaded', function() {
    // Cat data
    const cats = [
        {
            name: "Fluffy",
            img: "https://placekitten.com/300/200",
            count: 0
        },
        {
            name: "Whiskers",
            img: "https://placekitten.com/301/200",
            count: 0
        },
        {
            name: "Shadow",
            img: "https://placekitten.com/300/201",
            count: 0
        },
        {
            name: "Tiger",
            img: "https://placekitten.com/302/200",
            count: 0
        },
        {
            name: "Mittens",
            img: "https://placekitten.com/300/202",
            count: 0
        }
    ];

    let currentCatIndex = 0;

    const catNamesList = document.getElementById('cat-names');
    const catDisplay = document.getElementById('cat-display');

    // Render cat names list
    cats.forEach((cat, index) => {
        const li = document.createElement('li');
        li.textContent = cat.name;
        li.addEventListener('click', function() {
            currentCatIndex = index;
            renderCatDisplay();
        });
        catNamesList.appendChild(li);
    });

    // Render selected cat display
    function renderCatDisplay() {
        const cat = cats[currentCatIndex];
        catDisplay.innerHTML = `
            <h2>${cat.name}</h2>
            <img src="${cat.img}" alt="${cat.name}">
            <p>Clicks: <span id="cat-count">${cat.count}</span></p>
        `;
        const img = catDisplay.querySelector('img');
        img.addEventListener('click', function() {
            cat.count++;
            catDisplay.querySelector('#cat-count').textContent = cat.count;
        });
    }

    // Initial render
    renderCatDisplay();
});