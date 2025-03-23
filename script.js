// Add any interactive functionality here
// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
// Redirect to login or signup page
document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    const userChoice = confirm("Do you want to log in? Click OK for Login or Cancel for Signup.");
    if (userChoice) {
        window.location.href = "login.html"; // Redirect to login page
    } else {
        window.location.href = "signup.html"; // Redirect to signup page
    }
});

        });
    });
});