let userRole = '';

function setRole(role) {
    userRole = role;
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex';
}

document.getElementById('login-button').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation for demonstration purposes
    if (email === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else {
        // Simulating a login process
        errorMessage.textContent = '';
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userEmail', email);
    }
});

function showRegistration() {
    document.getElementById("registration").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

document.querySelector(".nav-links a[href='#registration']").addEventListener("click", function (e) {
    e.preventDefault();
    showRegistration();
});

function logout() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('attendance-calculator').style.display = 'none';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').textContent = '';
    document.getElementById('role-selection').style.display = 'flex';
    userRole = '';
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    location.reload();
}

// Center the logout button in the nav bar
const logoutButton = document.querySelector('.logout-button');
logoutButton.style.position = 'relative';
logoutButton.style.left = '50%';
logoutButton.style.transform = 'translateX(-50%)';

function showAttendanceCalculator() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('attendance-calculator').style.display = 'block';
}

document.getElementById('attendanceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const scheme = document.getElementById('scheme').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const classesPerWeek = parseInt(document.getElementById('classesPerWeek').value);
    const internalDays = parseInt(document.getElementById('internalDays').value);

    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalClasses = Math.floor(totalDays / 7) * classesPerWeek - internalDays;
    const maxAbsences = Math.floor(totalClasses * 0.15); // 85% attendance requirement

    document.getElementById('result').innerHTML = `
        <h2>Results:</h2>
        <p>Total number of classes: ${totalClasses}</p>
        <p>Maximum number of classes you can miss: ${maxAbsences}</p>
        <p>Note: Ensure to maintain at least 85% attendance to meet the requirements.</p>
    `;
});

// Display current date
const currentDate = new Date().toLocaleDateString();
document.getElementById('current-date').textContent = currentDate;

function showSignIn(role) {
    document.getElementById('branding-section').style.display = 'none';
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('authentication').style.display = 'block';
    document.querySelector('footer').classList.remove('visible');
}

function toggleForm(formType) {
    if (formType === 'signIn') {
        document.getElementById('signInForm').style.display = 'block';
        document.getElementById('signUpForm').style.display = 'none';
    } else {
        document.getElementById('signInForm').style.display = 'none';
        document.getElementById('signUpForm').style.display = 'block';
    }
}

function handleLogin() {
    const email = document.getElementById('signInEmail').value;
    document.getElementById('authentication').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.querySelector('footer').classList.add('visible');
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userEmail', email);
}

function logout() {
    alert('You have been logged out.');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    location.reload();
}

window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('branding-section').style.display = 'none';
        document.getElementById('role-selection').style.display = 'none';
        document.getElementById('authentication').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.querySelector('footer').classList.add('visible');
        const email = localStorage.getItem('userEmail');
        if (email) {
            document.getElementById('signInEmail').value = email;
        }
    }
}
