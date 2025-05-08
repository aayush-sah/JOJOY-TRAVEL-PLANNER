function validateForm() {
    // Get form input values
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const state = document.getElementById('state').value.trim();
    const licensePhoto = document.getElementById('license-photo').value.trim();
    const driverRequired = document.querySelector('input[name="driver-required"]:checked');

    // Validate fields
    if (!name) {
        alert("Please enter your name.");
        return false;
    }

    if (!age || isNaN(age) || age < 18) {
        alert("Please enter a valid age (18 or older).");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!state) {
        alert("Please select your state.");
        return false;
    }

    if (!licensePhoto) {
        alert("Please upload your license photo.");
        return false;
    }

    if (!driverRequired) {
        alert("Please specify if a driver is required.");
        return false;
    }

    alert("Rental Request Submitted Successfully!");
    return true;
}
