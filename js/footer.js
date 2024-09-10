document.querySelector('.meesho-wrapper').addEventListener('click', function() {
    const dropdown = document.querySelector('.meesho-dropdown');
    const content = document.querySelector('.meesho-content');
    
    // Toggle the dropdown content visibility
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    
    // Optionally, toggle a class for styling changes
    dropdown.classList.toggle('active');
});

// Close the dropdown if clicked outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.meesho-dropdown');
    const content = document.querySelector('.meesho-content');
    
    if (!dropdown.contains(event.target)) {
        content.style.display = 'none';
        dropdown.classList.remove('active');
    }
});
