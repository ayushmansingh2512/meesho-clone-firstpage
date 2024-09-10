document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-Box');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Show the dropdown menu when the search box is focused
    searchBox.addEventListener('focusin', () => {
        searchBox.classList.add('focused');
        dropdownMenu.style.display = 'flex';
    });

    // Hide the dropdown menu when the search box loses focus
    searchBox.addEventListener('focusout', () => {
        // Delay hiding to allow click on dropdown items
        setTimeout(() => {
            searchBox.classList.remove('focused');
            dropdownMenu.style.display = 'none';
        }, 200);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const downloadApp = document.querySelector('.downloadApp');
    const dropdownMenu2 = document.querySelector('.dropdown-menu2');
    
    // Toggle the dropdown menu when downloadApp is clicked
    downloadApp.addEventListener('click', (event) => {
        // Prevent the click event from propagating to the document
        event.stopPropagation();
        // Toggle the dropdown menu's visibility
        dropdownMenu2.style.display = dropdownMenu2.style.display === 'block' ? 'none' : 'block';
    });

    // Hide the dropdown menu when clicking outside of the dropdown or downloadApp
    document.addEventListener('click', (event) => {
        // Check if the click was outside the dropdown menu
        if (!downloadApp.contains(event.target) && !dropdownMenu2.contains(event.target)) {
            dropdownMenu2.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const item2 = document.querySelector('.item-2');
    const dropdownMenu3 = document.querySelector('#dropdownMenu3'); // Fix selector to match the ID

    item2.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the event from bubbling up
        dropdownMenu3.style.display = dropdownMenu3.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (event) => {
        if (!item2.contains(event.target) && !dropdownMenu3.contains(event.target)) {
            dropdownMenu3.style.display = 'none';
        }
    });
});
