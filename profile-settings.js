// Dark/Light Mode Toggle
const toggleMode = document.getElementById('toggleMode');
const body = document.body;

toggleMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleMode.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Edit Profile Picture
const editPictureButton = document.querySelector('.edit-picture');
const profilePicture = document.querySelector('.profile-picture img');

editPictureButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newPicture = prompt('Enter the URL of your new profile picture:');
    if (newPicture) {
        profilePicture.src = newPicture;
    }
});

// Form Submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Changes saved successfully!');
    });
});