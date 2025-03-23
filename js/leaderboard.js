// Search and Filter Functionality
const searchInput = document.querySelector('.search-filter input');
const filterSelect = document.querySelector('.search-filter select');
const leaderboardItems = document.querySelectorAll('.leaderboard-item');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    leaderboardItems.forEach(item => {
        const name = item.querySelector('.name').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

filterSelect.addEventListener('change', () => {
    const filterValue = filterSelect.value;
    leaderboardItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Pagination Functionality
const paginationButtons = document.querySelectorAll('.pagination button');
let currentPage = 1;

paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Next' && currentPage < 5) {
            currentPage++;
        } else if (button.textContent === 'Previous' && currentPage > 1) {
            currentPage--;
        }
        document.querySelector('.pagination span').textContent = `Page ${currentPage} of 5`;
    });
});