// Handle form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    e.target.reset(); // Clear the form
});

// Add hover effects to info cards
const infoCards = document.querySelectorAll('.info-card');

infoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth page transitions for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');

        // Add a fade-out effect
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = href; // Redirect after fade-out
        }, 300); // Match the duration with your CSS transition
    });
});

// Add animations to the hero section
const hero = document.querySelector('.hero');
hero.style.opacity = '0';
hero.style.transform = 'translateY(20px)';

setTimeout(() => {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
}, 100);