// Add hover effects to badges, challenges, and rewards
const badges = document.querySelectorAll('.badge');
const challenges = document.querySelectorAll('.challenge');
const rewards = document.querySelectorAll('.reward');

const addHoverEffect = (elements) => {
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-10px)';
            element.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
            element.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
};

addHoverEffect(badges);
addHoverEffect(challenges);
addHoverEffect(rewards);

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