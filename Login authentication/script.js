function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    var user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = 'index12.html';
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function signup() {
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedUsers.find(u => u.username === username)) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    storedUsers.push({ username, email, password });

    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Signup successful!");
    showLoginForm();
}

