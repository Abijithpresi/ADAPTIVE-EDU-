// DOM Elements
const addUserButton = document.querySelector('.btn-add-user');
const modal = document.getElementById('addUserModal');
const closeModalButton = document.querySelector('.close');
const addUserForm = document.getElementById('addUserForm');
const userTableBody = document.querySelector('.user-table tbody');

// Open Modal
addUserButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close Modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close Modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Form Submission
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userRole = document.getElementById('userRole').value;

    // Validate inputs
    if (!userName || !userEmail || !userRole) {
        alert('Please fill out all fields.');
        return;
    }

    // Add user to the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${userName}</td>
        <td>${userEmail}</td>
        <td>${userRole}</td>
        <td>
            <button class="btn-edit"><i class="fas fa-edit"></i></button>
            <button class="btn-delete"><i class="fas fa-trash"></i></button>
        </td>
    `;

    userTableBody.appendChild(newRow);

    // Clear form fields
    addUserForm.reset();

    // Close modal
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling

    // Show success message
    alert('User added successfully!');
});

// Edit and Delete Buttons (Event Delegation)
userTableBody.addEventListener('click', (e) => {
    const target = e.target;

    // Edit Button
    if (target.classList.contains('btn-edit') || target.closest('.btn-edit')) {
        const row = target.closest('tr');
        const name = row.cells[0].textContent;
        const email = row.cells[1].textContent;
        const role = row.cells[2].textContent;

        alert(`Edit User:\nName: ${name}\nEmail: ${email}\nRole: ${role}`);
    }

    // Delete Button
    if (target.classList.contains('btn-delete') || target.closest('.btn-delete')) {
        const row = target.closest('tr');
        if (confirm('Are you sure you want to delete this user?')) {
            row.remove();
            alert('User deleted successfully!');
        }
    }
});