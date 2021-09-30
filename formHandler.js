let registration = document.getElementById('registrationDiv');
let login = document.getElementById('loginDiv');

function openLogin() {
    registration.style.display = "none";
    login.style.display = "block";
}

function openRegistration() {
    registration.style.display = "block";
    login.style.display = "none";
}