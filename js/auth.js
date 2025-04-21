// Toggle between Login and Signup forms
const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginToggle.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
  loginToggle.classList.add('active');
  signupToggle.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  signupToggle.classList.add('active');
  loginToggle.classList.remove('active');
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Simulate login logic (replace with actual API call)
  const user = authenticateUser(email, password);

  if (user) {
    if (user.role === 'admin') {
      alert(`Login successful! Redirecting to Admin Dashboard...`);
      window.location.href = 'admin-dashboard.html'; // Redirect to Admin Dashboard
    } else {
      alert(`Login successful! Redirecting to Student Dashboard...`);
      window.location.href = 'student-dashboard.html'; // Redirect to Student Dashboard
    }
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const dob = document.getElementById('dob').value;
  const role = document.getElementById('role').value;
  const password = document.getElementById('signupPassword').value;

  // Simulate signup logic (replace with actual API call)
  const user = createUser(name, email, password, role);

  if (user) {
    if (user.role === 'admin') {
      alert(`Signup successful! Redirecting to Admin Dashboard...`);
      window.location.href = 'admin-dashboard.html'; // Redirect to Admin Dashboard
    } else {
      alert(`Signup successful! Redirecting to Student Dashboard...`);
      window.location.href = 'student-dashboard.html'; // Redirect to Student Dashboard
    }
  } else {
    alert('Signup failed. Please try again.');
  }
});

// Simulate user authentication (replace with actual backend logic)
function authenticateUser(email, password) {
  const users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'student@example.com', password: 'student123', role: 'student' },
  ];

  return users.find(user => user.email === email && user.password === password);
}

// Simulate user creation (replace with actual backend logic)
function createUser(name, email, password, role) {
  // Add user to the database (simulated here)
  return { name, email, password, role };
}
