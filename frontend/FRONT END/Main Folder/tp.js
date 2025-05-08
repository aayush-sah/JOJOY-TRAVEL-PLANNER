document.getElementById('travelForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const from = document.getElementById('from').value;
    const destination = document.getElementById('destination').value;
    const people = document.getElementById('people').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const budget = document.getElementById('budget').value;

    const transportation = [];
    if (document.getElementById('train').checked) transportation.push("Train");
    if (document.getElementById('bus').checked) transportation.push("Bus");
    if (document.getElementById('flight').checked) transportation.push("Flight");

    const requestBody = {
        name,
        age,
        from,
        destination,
        people,
        from_date: fromDate,
        to_date: toDate,
        budget,
        transportation,
    };

    try {
        console.log('Sending request to API with data:', requestBody);

        const response = await fetch('http://127.0.0.1:5000/plan-trip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        const result = await response.json();

        if (result.plan) {
            localStorage.setItem('travelPlan', result.plan);
            console.log('Plan stored. Redirecting to tpresult.html...');
            window.location.href = 'tpresult.html';
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        alert('An unexpected error occurred.');
    }
});
