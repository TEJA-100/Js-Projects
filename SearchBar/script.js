function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function search() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card-items");

    cards.forEach(card => {
        const title = card.querySelector("h5").textContent.toLowerCase();
        const priceText = card.querySelector("p").textContent.toLowerCase().replace(/[^\d]/g, '').trim();
        
        if (input === '' || title.includes(input) || priceText.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

const debouncedSearch = debounce(search, 300);

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("searchInput");
    const button = document.getElementById("searchBtn");
    
    input.addEventListener('input', debouncedSearch);
    button.addEventListener('click', search);
});
