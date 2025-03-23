// Add hover effects to recommendation cards
const recommendations = document.querySelectorAll('.recommendation');

recommendations.forEach(recommendation => {
    recommendation.addEventListener('mouseenter', () => {
        recommendation.style.transform = 'translateY(-10px)';
        recommendation.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });

    recommendation.addEventListener('mouseleave', () => {
        recommendation.style.transform = 'translateY(0)';
        recommendation.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth page transitions for links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const href = link.getAttribute('href'); // Get the link URL

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