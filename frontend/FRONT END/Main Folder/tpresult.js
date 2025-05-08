document.addEventListener("DOMContentLoaded", function () {
    const planContainer = document.getElementById("planContainer");
    const travelPlan = localStorage.getItem("travelPlan");

    if (travelPlan) {
        planContainer.innerHTML = `<pre>${travelPlan}</pre>`;
    } else {
        planContainer.innerHTML = "<p>No travel plan found. Please try again.</p>";
    }
});
