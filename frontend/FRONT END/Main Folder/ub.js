const stations = {
    Bhopal: [
        "AGRA", "AHMEDABAD", "AMRITSAR", "AURANGABAD", "AYODHYA", "BENGALURU", "BILASPUR", "BINA",
        "CHENNAI", "DAVANGERE", "DELHI", "DEWAS", "GONDIA", "GWALIOR", "HYDERABAD", "INDORE", "ITARSI",
        "JAIPUR", "JABALPUR", "JALANDHAR", "JHANSI", "KANPUR", "KATNI", "KATRA", "KHARAGPUR", "KOLKATA",
        "LUCKNOW", "LUDHIANA", "MADURAI", "MIRZAPUR", "MUMBAI", "NAGPUR", "PATNA", "PRAYAGRAJ",
        "PUNE", "RAIPUR", "REWA", "SURAT", "TATANAGAR", "THIRUVANANTHAPURAM", "TIRUNELVELI",
        "TITLAGARH", "UDAIPUR", "UJJAIN", "VIJAYAWADA", "VISAKHAPATNAM", "VASCO-DA-GAMA", "VARANASI"
    ].sort(),
    Nagpur: [
        "AHMEDABAD", "AMRAVATI", "AMRITSAR", "BENGALURU", "BILASPUR", "BINA", "CHENNAI", "COIMBATORE",
        "DELHI", "DHANBAD", "GAYA", "GUWAHATI", "HOWRAH", "HYDERABAD", "INDORE", "JABALPUR", "KANPUR",
        "KATNI", "KATRA", "KHARAGPUR", "KOCHI", "LUCKNOW", "MIRZAPUR", "MUMBAI", "PATNA", "PRAYAGRAJ",
        "PUNE", "RANCHI", "SECUNDERABAD", "SURAT", "TATANAGAR", "THIRUVANANTHAPURAM", "TIRUPATI",
        "UDAIPUR", "VARANASI", "VISAKHAPATNAM"
    ].sort(),
    Indore: [
        "AHMEDABAD", "AMRITSAR", "BENGALURU", "BHOPAL", "BILASPUR", "CHENNAI", "DEWAS", "GANDHINAGAR",
        "GWALIOR", "HOWRAH", "JAIPUR", "JABALPUR", "JODHPUR", "KATNI", "KOCHI", "KOTA", "LUCKNOW",
        "PATNA", "PRAYAGRAJ", "RATLAM", "SAGAR", "SURAT", "TIRUPATI", "UDAIPUR", "VARANASI",
        "VIJAYAWADA"
    ].sort(),
    Ranchi: [
        "BENGALURU", "BHUBANESWAR", "BILASPUR", "CHENNAI", "DELHI", "DHANBAD", "HOWRAH", "HYDERABAD",
        "JABALPUR", "KANPUR", "KHARAGPUR", "KOCHI", "LUCKNOW", "MIRZAPUR", "MUMBAI", "PATNA", "PRAYAGRAJ",
        "PUNE", "ROURKELA", "SURAT", "TATANAGAR", "VARANASI"
    ].sort(),
    Bilaspur: [
        "AHMEDABAD", "AMRITSAR", "BANARAS", "BENGALURU", "BHOPAL", "BILASPUR", "CHENNAI", "DELHI",
        "DHANBAD", "GAYA", "GUWAHATI", "HOWRAH", "HYDERABAD", "INDORE", "JABALPUR", "JAIPUR",
        "KATNI", "KOCHI", "KOLKATA", "LUCKNOW", "MUMBAI", "PATNA", "PRAYAGRAJ", "PUNE",
        "SECUNDERABAD", "SURAT", "TATANAGAR", "THIRUVANANTHAPURAM", "UDAIPUR", "VARANASI"
    ].sort()
};

// DOM Elements
const fromDestination = document.getElementById("from-destination");
const searchInput = document.getElementById("search-station");
const dropdown = document.getElementById("arrival-dropdown");
const travelOptionsContainer = document.getElementById("travel-options");
const travelDate = document.getElementById("travel-date");
const bookNowBtn = document.getElementById("book-now");

// Populate dropdown when "From" city changes
fromDestination.addEventListener("change", () => {
    const selectedCity = fromDestination.value;
    const stationOptions = stations[selectedCity] || [];
    populateDropdown(stationOptions);
    clearTravelOptions();
});

// Filter dropdown as user types (debounced)
let debounceTimer;
searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const query = searchInput.value.toUpperCase();
        const selectedCity = fromDestination.value;
        const stationOptions = stations[selectedCity] || [];
        const filteredOptions = stationOptions.filter(station =>
            station.includes(query)
        );
        populateDropdown(filteredOptions);
    }, 200);
});

// Show full dropdown on input focus
searchInput.addEventListener("focus", () => {
    const selectedCity = fromDestination.value;
    const stationOptions = stations[selectedCity] || [];
    populateDropdown(stationOptions);
});

// Hide dropdown if clicked outside
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== searchInput) {
        dropdown.style.display = "none";
    }
});

// Populate dropdown UI
function populateDropdown(options) {
    dropdown.innerHTML = "";
    options.forEach(option => {
        const item = document.createElement("div");
        item.className = "dropdown-item p-2 hover:bg-gray-200 cursor-pointer";
        item.textContent = option;
        item.addEventListener("click", () => {
            searchInput.value = option;
            dropdown.style.display = "none";
        });
        dropdown.appendChild(item);
    });
    dropdown.style.display = options.length > 0 ? "block" : "none";
}

// Clear travel info section
function clearTravelOptions() {
    travelOptionsContainer.innerHTML = `
        <h3 class="text-lg font-semibold mb-2">Travel Options</h3>
        <p class="text-gray-500">Select a "From" and "To" destination to see options.</p>
    `;
}

// Fetch travel data from Flask API
function fetchTravelOptions(from, to, date) {
    if (!from || !to || !date) return;

    travelOptionsContainer.innerHTML = `<p class="text-gray-500 italic">Fetching urgent travel options...</p>`;

    fetch("http://localhost:5000/urgent-booking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ from, to, date })
    })
        .then(res => {
            if (!res.ok) throw new Error("Failed to fetch data.");
            return res.json();
        })
        .then(data => {
            if (data.options) {
                travelOptionsContainer.innerHTML = `
                    <h3 class="text-lg font-semibold mb-2">Available Travel Options</h3>
                    <pre class="bg-gray-100 p-4 rounded text-sm text-black whitespace-pre-wrap">${data.options}</pre>
                `;
            } else {
                travelOptionsContainer.innerHTML = `<p class="text-red-500">No travel options found.</p>`;
            }
        })
        .catch(error => {
            travelOptionsContainer.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
        });
}

bookNowBtn?.addEventListener("click", () => {
    const from = fromDestination.value;
    const to = searchInput.value;
    const date = travelDate.value;

    if (!from || !to || !date) {
        alert("Please fill in all fields.");
        return;
    }

    // Redirect with query params to result page
    const targetUrl = `routedis.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`;
    window.location.href = targetUrl;
});
