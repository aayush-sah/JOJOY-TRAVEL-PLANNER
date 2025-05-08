document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect form inputs
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const email = document.getElementById("email").value.trim();
        const place = document.getElementById("place").value.trim();
        const state = document.getElementById("state").value;
        const license = document.getElementById("license").value;
        const driver = document.getElementById("driver").value;

        // Basic validation
        if (!name || !age || !email || !place || !state || !license || !driver) {
            alert("Please fill in all fields.");
            return;
        }

        if (age < 18) {
            alert("You must be at least 18 years old to rent a scooty.");
            return;
        }

        // Confirmation message
        alert("Thank you for your booking! Our team will contact you soon.");
        window.location.href = "Submit.html"; // Replace with the actual confirmation page
    });
});
