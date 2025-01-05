// Select the hamburger menu and navbar
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');

// Toggle 'active' class on the navbar when hamburger is clicked
hamburger.onclick = function() {
    navBar.classList.toggle('active');
};

// Close the navbar when any link is clicked
const links = document.querySelectorAll('.navbar a'); // Adjusted selector
links.forEach(link => {
    link.onclick = function() {
        navBar.classList.remove('active');
    };
});
