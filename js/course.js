// Add smooth scrolling for internal navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Check if it's an internal link (starts with "#")
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Add hover effects for course cards
const addHoverEffect = (card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
};

// Fetch courses from backend API and update UI
document.addEventListener("DOMContentLoaded", function () {
    fetch("http://127.0.0.1:5000/courses") // Ensure Flask is running
        .then(response => response.json())
        .then(data => {
            const courseContainer = document.querySelector(".course-container");
            courseContainer.innerHTML = ""; // Clear existing static content

            data.forEach(course => {
                const courseCard = document.createElement("div");
                courseCard.classList.add("course-card");
                courseCard.innerHTML = `
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <button>Continue Learning</button>
                `;

                // Apply hover effect
                addHoverEffect(courseCard);
                
                courseContainer.appendChild(courseCard);
            });
        })
        .catch(error => console.error("Error fetching courses:", error));
});

// Apply hover effect to initially available course cards (for static ones)
document.querySelectorAll('.course-card').forEach(addHoverEffect);

