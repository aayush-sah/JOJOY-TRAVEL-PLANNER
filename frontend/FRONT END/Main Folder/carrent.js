function validateForm() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const place = document.getElementById('place').value.trim();
    const state = document.getElementById('state').value;
    const license = document.getElementById('license').value;
    const driver = document.getElementById('driver').value;

    // Validate Name
    if (!name) {
        alert("Please enter your name.");
        return false;
    }

    // Validate Age
    if (!age || isNaN(age) || age < 18) {
        alert("Please enter a valid age (18 or older).");
        return false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Place
    if (!place) {
        alert("Please enter your place.");
        return false;
    }

    // Validate State
    if (!state) {
        alert("Please select your state.");
        return false;
    }

    // Validate License
    if (!license) {
        alert("Please upload your driving license.");
        return false;
    }

    // Validate Driver Selection
    if (!driver) {
        alert("Please specify if you require a driver.");
        return false;
    }

    // Confirmation message
    alert("Thank you for your booking! Our team will contact you soon.");
    window.location.href = "Submit.html"; // Replace with the actual confirmation page
};