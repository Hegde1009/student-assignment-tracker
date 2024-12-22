const formContent = document.getElementById("formContent");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");

// Show the Sign In form
function showSignIn() {
    formContent.style.transform = "translateX(0%)";
    signInBtn.style.background = "#88d3ce";
    signUpBtn.style.background = "none";
}

// Show the Sign Up form
function showSignUp() {
    formContent.style.transform = "translateX(-50%)";
    signUpBtn.style.background = "#88d3ce";
    signInBtn.style.background = "none";
}

// Save Sign Up data to localStorage
function handleSignUp() {
    const name = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    if (name && email && password) {
        // Store user data in localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Sign Up successful! You can now Sign In.");
        showSignIn();
    } else {
        alert("Please fill in all fields!");
    }
}

// Check Sign In credentials
function handleSignIn() {
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert(`Welcome back, ${localStorage.getItem("userName")}!`);
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
