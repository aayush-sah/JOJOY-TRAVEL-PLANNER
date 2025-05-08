function navigateTo(page) {
    // Adding a fade-out effect before navigation
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = page;
    }, 500);
  }
  
  // Adding functionality for the forms
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default submission
  
    const destination = document.getElementById('destination')?.value || 'N/A';
    const mode = document.getElementById('mode')?.value || 'N/A';
    const budget = document.getElementById('budget')?.value || 'N/A';
  
    if (destination && mode && budget) {
        alert(
            `Trip planned successfully! \nDestination: ${destination}\nMode: ${mode}\nBudget: ₹${budget}`
        );
    } else {
        alert('Please fill all the fields to plan your trip.');
    }
  }
  
  function handleUrgentBooking(event) {
    event.preventDefault(); // Prevent default submission
  
    const from = document.getElementById('from')?.value || 'N/A';
    const to = document.getElementById('to')?.value || 'N/A';
    const date = document.getElementById('date')?.value || 'N/A';
    const name = document.getElementById('name')?.value || 'N/A';
  
    if (from && to && date && name) {
        alert(
            `Urgent Booking Details: \nFrom: ${from}\nTo: ${to}\nDate: ${date}\nPassenger: ${name}`
        );
    } else {
        alert('Please complete all fields for urgent booking.');
    }
  }
  
  // Adding page fade-in effect
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = 1;
  });
  