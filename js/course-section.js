// DOM Elements
const addCourseButton = document.querySelector('.btn-add-course');
const modal = document.getElementById('addCourseModal');
const closeModalButton = document.querySelector('.close');
const addCourseForm = document.getElementById('addCourseForm');
const courseTableBody = document.querySelector('.course-table tbody');

// Open Modal
addCourseButton.addEventListener('click', () => {
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
addCourseForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const courseTitle = document.getElementById('courseTitle').value;
    const courseInstructor = document.getElementById('courseInstructor').value;
    const courseCategory = document.getElementById('courseCategory').value;
    const courseStatus = document.getElementById('courseStatus').value;

    // Validate inputs
    if (!courseTitle || !courseInstructor || !courseCategory || !courseStatus) {
        alert('Please fill out all fields.');
        return;
    }

    // Add course to the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${courseTitle}</td>
        <td>${courseInstructor}</td>
        <td>${courseCategory}</td>
        <td><span class="status ${courseStatus}">${courseStatus}</span></td>
        <td>
            <button class="btn-edit"><i class="fas fa-edit"></i></button>
            <button class="btn-delete"><i class="fas fa-trash"></i></button>
        </td>
    `;

    courseTableBody.appendChild(newRow);

    // Clear form fields
    addCourseForm.reset();

    // Close modal
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling

    // Show success message
    alert('Course added successfully!');
});

// Edit and Delete Buttons (Event Delegation)
courseTableBody.addEventListener('click', (e) => {
    const target = e.target;

    // Edit Button
    if (target.classList.contains('btn-edit') || target.closest('.btn-edit')) {
        const row = target.closest('tr');
        const title = row.cells[0].textContent;
        const instructor = row.cells[1].textContent;
        const category = row.cells[2].textContent;
        const status = row.cells[3].textContent;

        alert(`Edit Course:\nTitle: ${title}\nInstructor: ${instructor}\nCategory: ${category}\nStatus: ${status}`);
    }

    // Delete Button
    if (target.classList.contains('btn-delete') || target.closest('.btn-delete')) {
        const row = target.closest('tr');
        if (confirm('Are you sure you want to delete this course?')) {
            row.remove();
            alert('Course deleted successfully!');
        }
    }
});