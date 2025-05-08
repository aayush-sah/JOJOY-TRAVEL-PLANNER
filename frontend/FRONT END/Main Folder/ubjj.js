function handleSubmit(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the input values from the form
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;

    // Build the URL with query parameters
    const routePageUrl = `routedis.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}&name=${encodeURIComponent(name)}`;

    // Redirect to the route display page
    window.location.href = routePageUrl;
}
