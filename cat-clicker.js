document.addEventListener('DOMContentLoaded', function() {
    // Cat data
    const cats = [
        { name: "Fluffy",  img: "https://placekitten.com/300/200", count: 0 },
        { name: "Whiskers", img: "https://placekitten.com/301/200", count: 0 },
        { name: "Shadow", img: "https://placekitten.com/300/201", count: 0 },
        { name: "Tiger",  img: "https://placekitten.com/302/200", count: 0 },
        { name: "Mittens", img: "https://placekitten.com/300/202", count: 0 }
    ];

    let currentCatIndex = 0;

    const catNamesList = document.getElementById('cat-names');
    const catDisplay   = document.getElementById('cat-display');

    // Admin elements
    const adminBtn    = document.getElementById('admin-btn');
    const adminArea   = document.getElementById('admin-area');
    const adminName   = document.getElementById('admin-name');
    const adminUrl    = document.getElementById('admin-url');
    const adminClicks = document.getElementById('admin-clicks');
    const adminSave   = document.getElementById('admin-save');
    const adminCancel = document.getElementById('admin-cancel');

    // Render cat names list
    cats.forEach((cat, index) => {
        const li = document.createElement('li');
        li.textContent = cat.name;
        li.addEventListener('click', function() {
            currentCatIndex = index;
            renderCatDisplay();
            // If admin panel is open, refresh its values for the new selection
            if (adminArea.style.display !== 'none') {
                populateAdminForm();
            }
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
            // keep admin input in sync if open
            if (adminArea.style.display !== 'none') {
                adminClicks.value = cat.count;
            }
        });
    }

    function populateAdminForm() {
        const cat = cats[currentCatIndex];
        adminName.value   = cat.name;
        adminUrl.value    = cat.img;
        adminClicks.value = cat.count;
    }

    // Admin button toggles
    adminBtn.addEventListener('click', function() {
        populateAdminForm();
        adminArea.style.display = 'block';
    });

    adminCancel.addEventListener('click', function() {
        adminArea.style.display = 'none';
    });

    adminSave.addEventListener('click', function() {
        const cat = cats[currentCatIndex];
        cat.name  = adminName.value.trim() || cat.name;
        cat.img   = adminUrl.value.trim()  || cat.img;
        const parsedClicks = parseInt(adminClicks.value, 10);
        cat.count = Number.isNaN(parsedClicks) || parsedClicks < 0 ? cat.count : parsedClicks;

        // Update list item text
        if (catNamesList.children[currentCatIndex]) {
            catNamesList.children[currentCatIndex].textContent = cat.name;
        }

        renderCatDisplay();
        adminArea.style.display = 'none';
    });

    // Initial render
    renderCatDisplay();
});